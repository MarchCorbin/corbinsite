import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import {Link, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Contact from '../contact/Contact'
import { SocialIcon } from "react-social-icons";



const HomePage = () => {
  return (
    <div className="homepage fade-in">
      <div className="left-homepage">
        <h1 className="main-title">Corbin March</h1>
        <img
          className="home-image"
          src="/assets/Corbinbwmain.jpg"
          alt="main-shot"
        />
        <div style={{display:'flex'}}>
        <SocialIcon url="https://www.linkedin.com/in/marchcorbin/" />
        <SocialIcon url="https://github.com/MarchCorbin" />
        </div>
      </div>
      <div className="right-homepage">
        <a href="/contact">
          <h1 className="home-options">Contact</h1>
        </a>
        <a href="/experience"><h1 className="home-options">Experience</h1></a>
        <a href='/projects'><h1 className="home-options">Projects</h1></a>
      </div>
    </div>
  );
}

export default HomePage