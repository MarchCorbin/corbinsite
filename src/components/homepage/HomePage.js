import React from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import { SocialIcon } from "react-social-icons";



const HomePage = () => {
  return (
    <div className="homepage fade-in">
      <div className="left-homepage">
        <h1 className="main-title">Corbin March</h1>
          <div className="mobile-layout">
            <Link to="/contact">
            <h1 className="home-options">Contact</h1>
            </Link>
            <Link to="/experience"><h1 className="home-options">Experience</h1></Link>
            <Link to='/projects'><h1 className="home-options">Projects</h1></Link>
          </div>
        <img
          className="home-image"
          src="/assets/Corbinbwmain.jpg"
          alt="main-shot"
        />
        <div className='socials-container' style={{display:'flex'}}>
        <SocialIcon className='social-icons' url="https://www.linkedin.com/in/marchcorbin/" />
        <SocialIcon className='social-icons' url="https://github.com/MarchCorbin" />
        </div>
      </div>
      <div className="right-homepage">
        <Link to="/contact">
          <h1 className="home-options">Contact</h1>
        </Link>
        <Link to="/experience"><h1 className="home-options">Experience</h1></Link>
        <Link to='/projects'><h1 className="home-options">Projects</h1></Link>
      </div>
    </div>
  );
}

export default HomePage