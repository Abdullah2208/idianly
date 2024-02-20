import '../App.css'

import arrow from '../assets/images/arrow.svg'

function Experience() {
    const arr = [
        {
            no: '1',
            position: 'Design Intern',
            company: 'Google',
            description: 'Worked on design sysstem at Material 3 designs',
            date: '20 April, 2021'
        },
        {
            no: '2',
            position: 'Jr. UI/UX Designer',
            company: 'Microsoft',
            description: 'Worked on design sysstem at Material 3 designs',
            date: '20 April, 2022'
        },
        {
            no: '3',
            position: 'Sr. UI/UX Designer',
            company: 'a SASS startup',
            description: 'Worked on design sysstem at Material 3 designs',
            date: '20 April, 2023'
        }
    ]
    return (
        <div className='exp'>
            <div>
                <p>Work Experience</p>
                <img src={arrow} alt='arrow'/>
                <p>Have been designing for the past 4 years</p>
            </div>
            <div className='exp-group'>
                {
                    arr.map(exp => {
                        return(
                            <div key={exp.no}>
                                <p>{exp.no}</p>
                                <div>
                                    <p>{exp.position} at <strong>{exp.company}</strong></p>
                                    <p>{exp.description}</p>
                                    <p>{exp.date}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Experience