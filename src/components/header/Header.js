import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <nav className='header'>
      <a style={{textDecoration: 'none', color: 'black'}} href='/'><h1 className='header-options'>Corbin March</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/projects'><h1 className='header-options'>Projects</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/experience'><h1 className='header-options'>Experience</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/contact'><h1 className='header-options'>Contact</h1></a>
    </nav>
    </>
  )
}

export default Header