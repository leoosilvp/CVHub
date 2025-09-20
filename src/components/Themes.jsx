import '../css/themes.css'
import icondark from '../assets/img/icon-dark.svg'
import iconlight from '../assets/img/icon-light.svg'


function Themes() {
  return (
    <section className="ctn-themes">
      <h1>select a theme:</h1>
      <article className="theme">
        <input type="checkbox" />
        <div className="card-theme">
          <img src={icondark}/>
          <h1>GitHub - Dark</h1>
        </div>
      </article>

      <article className="theme">
        <input type="checkbox" />
        <div className="card-theme">
          <img src={iconlight}/>
          <h1>GitHub - Light</h1>
        </div>
      </article>
    </section>
  )
}

export default Themes;
