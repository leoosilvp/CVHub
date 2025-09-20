import '../css/header.css'
import icon from '../assets/img/icon-dark.svg'

function Header() {
  return (
    <header>
      <h1>CVHub</h1>
      <img src={icon}/>
      <a href="#"><i className="fa-brands fa-square-github"></i></a>
    </header>
  )
}

export default Header;
