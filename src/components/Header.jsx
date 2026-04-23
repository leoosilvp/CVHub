import { Coffee, Github, Home } from '@geist-ui/icons';
import icon from '../assets/svg/icon.svg'
import { Link, NavLink } from 'react-router-dom';

function Header({ path, user }) {
  return (
    <header className='header-main'>
      <section className='header-content'>
        <article className='header-content-left'>
          <Link>
            <img src={icon} />
          </Link>

          <span>
            <p>/</p>
            <h2>{path}</h2>
          </span>
        </article>

        {user && (
          <Link to={`https://github.com/${user}`} className='header-content-right'>
            <h1>{user}</h1>
            <img src="https://avatars.githubusercontent.com/u/182553526?v=4" />
          </Link>
        )}

      </section>

      <nav>
        <ul>
          <NavLink to='/home'><Home size={16} /> Home</NavLink>
          <NavLink to='/contribute'><Coffee size={16} /> Contribute</NavLink>
          <NavLink to='https://github.com/leoosilvp/CVHub' target='_blank'><Github size={16} /> GitHub</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
