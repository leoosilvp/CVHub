import { useRef, useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { UserContext } from "../context/UserContext";
import "../css/content.css";
import "../css/markdown.css"; // Importa o CSS do markdown

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

  const handleDownload = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current, {
      useCORS: true,
      backgroundColor: theme === "dark" ? "#0d1117" : "#fff",
      scale: 2,
      scrollY: -window.scrollY,
    });

    const link = document.createElement("a");
    link.download = `${userData.profile.login}-cv.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!userData) return null;

  return (
    <section className="ctn-content">
      <div className="content-profile">
        <div className="header-buttons">
          <h1>@{userData.profile.login} - Perfil Pronto</h1>
          <button onClick={handleDownload}>
            <i className="fa-solid fa-download"></i> Baixar PNG
          </button>
        </div>

        <div
          className={`content ${theme}`}
          ref={contentRef}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "10px",
            backgroundColor: theme === "dark" ? "#0d1117" : "#fff",
            color: theme === "dark" ? "#c9d1d9" : "#24292f",
            boxShadow:
              theme === "dark"
                ? "0 4px 30px rgba(0,0,0,0.5)"
                : "0 4px 20px rgba(0,0,0,0.1)",
            padding: "30px",
            fontFamily:
              "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {/* Perfil Header */}
          <div
            className="profile-header"
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom:
                theme === "dark"
                  ? "1px solid #30363d"
                  : "1px solid #e1e4e8",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="avatar"
                style={{
                  width: "120px",
                  borderRadius: "50%",
                  marginRight: "25px",
                }}
              />
            )}
            <div>
              <h2>{userData.profile.name}</h2>
              <p style={{ fontStyle: "italic", margin: "5px 0" }}>
                {userData.profile.bio}
              </p>
              <p style={{ fontSize: "0.9em", margin: "5px 0" }}>
                <b>Seguidores:</b> {userData.profile.followers} •{" "}
                <b>Seguindo:</b> {userData.profile.following} •{" "}
                <b>Repos:</b> {userData.profile.public_repos}
              </p>
            </div>
          </div>

          {/* Top Repositórios */}
          <div className="top-repos" style={{ marginBottom: "20px" }}>
            <h3
              style={{
                borderBottom:
                  theme === "dark"
                    ? "1px solid #30363d"
                    : "1px solid #e1e4e8",
                paddingBottom: "10px",
              }}
            >
              Top Repositórios ⭐
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {userData.top_repos.map((repo) => (
                <li
                  key={repo.name}
                  style={{
                    padding: "10px 0",
                    borderBottom:
                      theme === "dark"
                        ? "1px solid #21262d"
                        : "1px solid #e1e4e8",
                  }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: theme === "dark" ? "#58a6ff" : "#0969da",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {repo.name}
                  </a>{" "}
                  - ⭐ {repo.stars}
                </li>
              ))}
            </ul>
          </div>

          {/* README renderizado com markdown-body */}
          {userData.readme && (
            <div className="readme" style={{ marginTop: "20px" }}>
              <h3
                style={{
                  borderBottom:
                    theme === "dark"
                      ? "1px solid #30363d"
                      : "1px solid #e1e4e8",
                  paddingBottom: "10px",
                }}
              >
                README
              </h3>
              <div
                className="markdown-body"
                style={{
                  backgroundColor:
                    theme === "dark" ? "#161b22" : "#f6f8fa",
                  color: theme === "dark" ? "#c9d1d9" : "#24292f",
                  borderRadius: "5px",
                  padding: "20px",
                  overflowX: "auto",
                }}
              >
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
