import React, { useState, useEffect } from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Contact from '../contact/Contact'



const HomePage = () => {
  return (
    <div className="homepage">
      <div className="left-homepage">
        <h1 className="main-title">Corbin March</h1>
        <img
          className="home-image"
          src="/assets/Corbinbwmain.jpg"
          alt="main-shot"
        />
      </div>
      <BrowserRouter>
      <div className="right-homepage">
          <Link to="/contact">
            <h1 className="home-options">Contact</h1>
          </Link>
          <h1 className="home-options">Experience</h1>
          <h1 className="home-options">Projects</h1>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default HomePage