import React from 'react'
import './Contact.css'
import Header from '../header/Header'
import { SocialIcon } from "react-social-icons";
import Resume from '../resume/Resume'


const Contact = () => {
  return (
    <>
    <Header location={'contact'} />
    <div className="contactinfo fade-in">
      <h1 className='page-title'>Contact</h1>
      <a className="contact-option" href="https://mail.google.com/mail/?view=cm&fs=1&to=marchcorbin@gmail.com" target="_blank">
        <h2 className='contact-text'><img className='contact-icons' src='/assets/emailicon.png' /> MarchCorbin@gmail.com</h2>
      </a>
      <a className="contact-option" href="https://www.linkedin.com/in/marchcorbin/" target="_blank">
        <h2 className='contact-text'><SocialIcon className="contact-icons" url='https://www.linkedin.com/in/marchcorbin/' />linkedin.com/in/marchcorbin/</h2>
      </a>
      <a className="contact-option" href="https://github.com/MarchCorbin" target="_blank">
        <h2 className='contact-text'><SocialIcon className="contact-icons" url='https://github.com/MarchCorbin' />github.com/MarchCorbin</h2>
      </a>
        <h2 className='contact-option'><img className='contact-icons' src='./assets/phoneicon.png' />(720)626-1125</h2>
    </div>
    </>
  );
}

export default Contact;