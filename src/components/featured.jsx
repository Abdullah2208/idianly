import '../App.css'
import rectOne from '../assets/images/Rectangle 41.png'
import rectTwo from '../assets/images/Rectangle 42.png'
import rectThree from '../assets/images/Rectangle 39.png'
import rectFour from '../assets/images/Rectangle 40.png'
import arrow from '../assets/images/arrow.svg'
import cursorOne from '../assets/images/Cursor.svg'
import cursorTwo from '../assets/images/Cursor(1).svg'
import cursorThree from '../assets/images/Cursor(2).svg'
import cursorFour from '../assets/images/Cursor(3).svg'


function Featured () {
    const arr = [
        {
            img: rectOne,
            title: '4 style portfolio design',
            cursor: cursorOne,
            tag: 'No-code'
        },
        {
            img: rectTwo,
            title: 'Color system for app',
            cursor: cursorTwo,
            tag: 'UI Design'
        },
        {
            img: rectThree,
            title: 'Onboarding screen process',
            cursor: cursorThree,
            tag: 'UX Design'
        },
        {
            img: rectFour,
            title: 'Finance Loading Page',
            cursor: cursorFour,
            tag: 'UI Design'
        }
    ]



    return (
        <div className='featured'>
            <div className='featured-side'>
                <p>Featured Projects</p>
                <img src={arrow} alt='arrow'/>
                <p>Have designed more than 20 projects</p>
            </div>
            <div className='featured-main'>
                {arr.map(catalogue => {
                    return(
                        <div key={catalogue.img}>
                            <img src={catalogue.img} alt='Image same as title'/>
                            <p>{catalogue.title}</p>
                            <div className='strip'>
                                <img src={catalogue.cursor} alt='coloured cursor'/>
                                <p>{catalogue.tag}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Featured