import '../App.css'
import logo from '../assets/images/Vector.svg'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <img src={logo}/>
                <p>znisa</p>
            </div>
            <div>
                <p>Twitter X</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}

export default Footer