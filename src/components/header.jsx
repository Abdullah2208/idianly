import '../App.css'
import logo from '../assets/images/Vector.svg'

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt='logo'/>
                <p>znisa</p>
            </div>
            <nav>
                <ul>
                    <li>Portfolio</li>
                    <div>
                        <li>Hire me</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;