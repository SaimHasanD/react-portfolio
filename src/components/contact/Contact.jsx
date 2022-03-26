import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7upq7r4', 'template_d2e4uzc', form.current, 'IsyGXVB9aS8CLTDGP')
    
     e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className='contactOption'>
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>mutant.me.70@gmail.com</h5>
            <a href="mailto:mutant.me.70@gmail.com">Send a message</a>
          </article>
          <article className='contactOption'>
            <RiMessengerLine className='contactOptionIcon'/>
            <h4>Messenger</h4>
            <h5>saim.hasan.02</h5>
            <a href="https://www.facebook.com/messages/t/100024599412083" target="_blank">Send a message</a>
          </article>
          <article className='contactOption'>
            <BsWhatsapp className='contactOptionIcon'/>
            <h4>Whatsapp</h4>
            <h5>+88 01278-451350</h5>
            <a href="https://api.whatsapp.com/send?phone=+923030770738" target="_blank">Send a message</a>
          </article>
        </div>
{/*-------------------------------End Of Contact Option--------------------------------------*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact