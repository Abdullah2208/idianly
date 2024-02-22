import '../App.css'

import arrow from '../assets/images/arrow.svg'

function Contact() {
    return (
        <div className='contact'>
            <div>
                <p>Contact here</p>
                <img src={arrow} alt='arrow'/>
                <p>Got a project idea? Just say <strong>Hi</strong></p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        name='name'
                        type={'text'}
                        required
                        minLength={3}
                        maxLength={20}
                        placeholder='Your Name...'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        id='email'
                        name='email'
                        type={'email'}
                        required
                        placeholder='Your email...'
                    />
                </div>
                <div>
                    <label htmlFor='about'>About Project</label>
                    <textarea
                        id='about'
                        name='about'
                        rows= '5'
                        cols='70'
                    ></textarea>
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;