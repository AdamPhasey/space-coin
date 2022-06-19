import './index.css'

function Header () {

    return (
        <header className='header1'>
            <img className='logo-header' src={require ('../../design-files/logo.png')} alt='Space Coin logo'/>
            <h1 className='header-title'>SPACE COIN</h1>
        </header>
    )
}

export default Header;