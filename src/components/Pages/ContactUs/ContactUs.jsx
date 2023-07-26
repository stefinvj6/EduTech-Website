import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='container'>
        <div className="contact-container">
            <h1>Conatct Us</h1>
            <p>
                We'd look to hear from you. Please Fill out 
                the form below or reach out to us using the
                contact details provider.
            </p>
            <form action="" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id='message' name='message' rows='5' required></textarea>
                </div>
                <button type='submit' className="submit-btn">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs