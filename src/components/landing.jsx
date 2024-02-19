import '../App.css'

import zainab from '../assets/images/Group 18.svg'
import arrow from '../assets/images/arrow.svg'

function Landing() {
    return(
        <div className='landing'>
            <div className='doodle'>
                <img src={zainab} alt='decoration'/>
                <img src={arrow} alt='decoration'/>
                <p>znisa</p>
            </div>
            <div className='about-me'>
                <div>
                    <h1>I <span  className='pink-bg'><span>design</span></span> top notch websites</h1>
                </div>
                <div>
                    <p>I'll develop your website and will develop to land it on the internet using No-code.</p>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    )
}

export default Landing