import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className='header'>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/'><h1>Corbin March</h1></Link>
      <h1 className='header-options'>Projects</h1>
      <h1 className='header-options'>Experience</h1>
    </div>
    </>
  )
}

export default Header