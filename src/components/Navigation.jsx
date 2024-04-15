import Logo from '../assets/logo.webp';
import '../styles/Navigation.scss';

const links = ['What is the CV?', 'About', 'Profilify Premium', 'How to write a CV', 'Example of a CV'];

const Navigation = () => {
    return (
        <header className='navigation-wrapper'>
            <div className='logo-wrapper'>
                <img className='logo' src={Logo} alt='Logo' />
            </div>
            <nav className='navigation'>
                <ul className='links-list poppins-regular'>
                    {links.map(link => <li key={link} className='links-item'><a className='link' href='#'>{link}</a></li>)}
                </ul>
            </nav>
            <div className='login-wrapper'>
                <button className='login poppins-regular'>Login</button>
            </div>
            <div className='sign-up-wrapper'>
                <button className='sign-up poppins-semibold'><span>Sign Up</span></button>
            </div>
        </header>
    )
}

export default Navigation