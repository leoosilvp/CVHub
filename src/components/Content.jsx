import "../css/content.css";
import "../css/markdown.css";

import { useRef, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

function Content() {
  const { userData, theme } = useContext(UserContext);
  const contentRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (!userData) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = userData.profile.avatar_url;
    img.onload = () => setAvatarUrl(img.src);
  }, [userData]);

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;

    // Captura o conteúdo como canvas
    const canvas = await html2canvas(contentRef.current, {
      useCORS: true,
      backgroundColor: theme === "dark" ? "#0d1117" : "#fff",
      scale: 2,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");

    // Cria PDF com tamanho do canvas
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${userData.profile.login}-cv.pdf`);
  };

  if (!userData) return null;

  return (
    <section className="ctn-content">
      <div className="content-profile">
        <div className="header-buttons">
          <h1>@{userData.profile.login} - Perfil Pronto</h1>
          <button onClick={handleDownloadPDF}>
            <i className="fa-solid fa-download"></i> Baixar CV
          </button>
        </div>

        <div className={`content ${theme}`} ref={contentRef}>
          <div className="profile-header">
            {avatarUrl && <img src={avatarUrl} alt="avatar" />}
            <div>
              <h2>{userData.profile.name}</h2>
              <p className="bio">{userData.profile.bio}</p>
              <p className="stats">
                <b>Seguidores:</b> {userData.profile.followers} •{" "}
                <b>Seguindo:</b> {userData.profile.following} •{" "}
                <b>Repos:</b> {userData.profile.public_repos}
              </p>
            </div>
          </div>

          <div className="top-repos">
            <h3>Top Repositórios ⭐</h3>
            <ul>
              {userData.top_repos.map((repo) => (
                <li key={repo.name}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>{" "}
                  - ⭐ {repo.stars}
                </li>
              ))}
            </ul>
          </div>

          {userData.readme && (
            <div className="readme">
              <h3>README</h3>
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                  {userData.readme}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Content;
