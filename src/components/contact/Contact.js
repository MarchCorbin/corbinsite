import React from 'react'
import './Contact.css'
import Header from '../header/Header'

const Contact = () => {
  return (
    <>
    <Header />
    <div className="contactinfo fade-in">
      <h1 className='page-title'>Contact</h1>
      <a className="contact-option" href="mail.google.com" target="_blank">
        <h2>Email: MarchCorbin@gmail.com</h2>
      </a>
      <a className="contact-option" href="https://www.linkedin.com/in/marchcorbin/" target="_blank">
        <h2>LinkedIn: https://www.linkedin.com/in/marchcorbin/</h2>
      </a>
      <a className="contact-option" href="https://github.com/MarchCorbin" target="_blank">
        <h2>GitHub: https://github.com/MarchCorbin</h2>
      </a>
        <h2>Phone: (720)626-1125</h2>
    </div>
    </>
  );
}

export default Contact;