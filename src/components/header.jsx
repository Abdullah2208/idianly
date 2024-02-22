import '../App.css'
import logo from '../assets/images/Vector.svg'

function Header(props) {
    return (
        <header>
            <div>
                <img src={logo} alt='logo'/>
                <p>znisa</p>
            </div>
            <nav>
                <ul>
                    <li onClick={() => props.onClick('portfolioRef')}>Portfolio</li>
                    <div>
                        <li  onClick={() => props.onClick('contactRef')}>Hire me</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;