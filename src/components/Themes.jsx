import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import '../css/themes.css';
import icondark from '../assets/img/icon-dark.svg';
import iconlight from '../assets/img/icon-light.svg';

function Themes() {
  const { theme, setTheme } = useContext(UserContext);

  const handleChange = (selected) => {
    setTheme(selected);
  }

  return (
    <section className="ctn-themes">
      <h1>Select a theme:</h1>

      <article className="theme" onClick={() => handleChange("dark")}>
        <input type="checkbox" checked={theme === "dark"} readOnly />
        <div className="card-theme">
          <img src={icondark} alt="GitHub Dark" />
          <h1>GitHub - Dark</h1>
        </div>
      </article>

      <article className="theme" onClick={() => handleChange("light")}>
        <input type="checkbox" checked={theme === "light"} readOnly />
        <div className="card-theme">
          <img src={iconlight} alt="GitHub Light" />
          <h1>GitHub - Light</h1>
        </div>
      </article>
    </section>
  );
}

export default Themes;
