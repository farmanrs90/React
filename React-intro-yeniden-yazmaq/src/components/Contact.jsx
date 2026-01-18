import React from 'react'

export const Contact = () => {
    return (
        <div id='Contact' className='contact'>
            <h2>
                Get In Touch
            </h2>
            <p>
                Ready to start your project? Send us a message and we'll get back to you as soon as possible.
            </p>
            <form action="form">
                <h3>Contact Form</h3>
                <p>Fill out the form below and we'll respond within 24 hours.</p>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your full name' />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='your.email@example.com' />
                <label htmlFor="">message</label>
                <textarea name="message" id="message" placeholder='tell us about your project'></textarea>
                <button>send message</button>







            </form>




        </div>
    )
}
