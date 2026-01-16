import React from 'react'
import '../assets/css/contact.css'
const Contact = () => {
    return (
        <section>
            <h2>Get In Touch</h2>
            <p>Ready to start your project? Send us a message and we'll get back to you as soon as possible.</p>
            <div className='contactForm'>
                <form>Contact Form</form>
                <p>Fill out the form below and we'll respond within 24 hours.</p>
                <label>Name</label>
                <input type="text" />
                <label>email</label>
                <input type="email" />
                <label>message</label>
                 <textarea></textarea>
                 <button type='submit'>Send</button>


            </div>
        </section>
    )
}

export default Contact