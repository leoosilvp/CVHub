import icon from '../assets/svg/icon.svg'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header-main'>
      <section className='header-content'>
        <article className='header-content-left'>
          <Link>
            <img src={icon} />
          </Link>

          <span>
            <p>/</p>
            <h2>Home</h2>
          </span>
        </article>

        <nav>
          <ul>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/welcome'>Welcome</NavLink>
            <NavLink to='/contribute'>Contribute</NavLink>
            <NavLink to='https://github.com/leoosilvp/CVHub'>GitHub</NavLink>
          </ul>
        </nav>

      </section>
    </header>
  )
}

export default Header;
