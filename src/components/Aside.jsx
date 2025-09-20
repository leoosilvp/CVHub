import '../css/aside.css'
import logo from '../assets/img/logo-dark.svg'
import Themes from './Themes'

function Aside() {
  return (
    <aside>
        <section className='presentation-aside'>
            <img src={logo} alt="logo-CVHub" />
            <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy 
                text ever since the 1500s,
            </p>
        </section>

        <section className='ctn-input'>
            <label htmlFor="username">Your Username:</label>
            <div className="input">
                <input id='username' type="text" placeholder='@username'/>
                <button><i className="fa-regular fa-file-lines"></i></button>
            </div>
        </section>

        <Themes />

        <section className='footer-aside'>
            <p>O CVHub AI não possui afiliação ou vínculo oficial com o GitHub.</p>
            <div className="copyright">
                <p>Graham.co | CVHub &copy; 2025</p>
            </div>
        </section>
    </aside>
  )
}

export default Aside;
