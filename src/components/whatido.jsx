import '../App.css'

import arrow from '../assets/images/arrow.svg'
import pencil from '../assets/images/Group 1.svg'
import eye from '../assets/images/Group 2.svg'
import star from '../assets/images/Group 10.svg'

function WhatIDO () {
    const arr = [
        {
            icon: pencil,
            title: 'User Research Design',
            tag: 'Pen/Paper'
        },
        {
            icon: eye,
            title: 'UI & Product Design',
            tag: 'Figma'
        },
        {
            icon: star,
            title: 'No-code Development',
            tag: 'Webflow'
        }
    ]
    return (
        <div className='whatido'>
            <div>
                <p>What i do?</p>
                <img src={arrow}/>
            </div>
            <div className='card-group'>
                {arr.map(card => {
                    return(
                        <div className='card'>
                            <img src={card.icon}/>
                            <h3>{card.title}</h3>
                            <p>{card.tag}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default WhatIDO