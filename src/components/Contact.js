import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'

const Contact = () => {
    const form = useRef();



    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dd6xpmh', 'template_7dfy8ip', form.current, 'PQXyZDi2W5ZN7VZnm')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className='contact-container'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact 