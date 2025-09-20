import '../css/aside.css';
import logo from '../assets/img/logo-dark.svg';
import Themes from './Themes';
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Aside() {
    const { setUserData } = useContext(UserContext);
    const [username, setUsername] = useState("");

    const handleFetch = async () => {
        if (!username) return;

        try {
            const profileRes = await fetch(`https://api.github.com/users/${username}`);
            const profile = await profileRes.json();

            const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
            let repos = await reposRes.json();
            repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            const top_repos = repos.slice(0, 5).map(r => ({ name: r.name, stars: r.stargazers_count, html_url: r.html_url }));

            let readme = "";
            try {
                const readmeRes = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`);
                if (readmeRes.ok) readme = await readmeRes.text();
            } catch { }

            setUserData({ profile, top_repos, readme });
        } catch (error) {
            console.error("Erro ao buscar dados do GitHub:", error);
        }
    };

    return (
        <aside>
            <section className='presentation-aside'>
                <img src={logo} alt="logo-CVHub" />
                <p>Bem-vindo ao CVHub AI, seu perfil GitHub em formato de currículo!</p>
            </section>

            <section className='ctn-input'>
                <label htmlFor="username">Your Username:</label>
                <div className="input">
                    <input
                        id='username'
                        type="text"
                        placeholder='@username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") handleFetch();
                        }}
                    />
                    <button onClick={handleFetch}><i className="fa-regular fa-file-lines"></i></button>
                </div>
            </section>

            <Themes />

            <section className='footer-aside'>
                <p>O CVHub AI não possui afiliação oficial com o GitHub.</p>
                <div className="copyright">
                    <p>Graham.co | CVHub &copy; 2025</p>
                </div>
            </section>
        </aside>
    );
}

export default Aside;
