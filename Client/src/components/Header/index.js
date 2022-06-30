import './index.css'
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from '../Profile';

function Header () {

    return (
        <header className='header1'>
            <img className='logo-header' src={require ('../../design-files/logo.png')} alt='Space Coin logo'/>
            <h1 className='header-title'>SPACE COIN</h1>
            <div>
                 <Profile className='user-loggedin-profile'/>
            <LoginButton className='auth-btn' />
            <LogoutButton className='auth-btn' />
            </div>
           

            
        </header>
    )
}

export default Header;