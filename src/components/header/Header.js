import {React, useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Header = ({location}) => {
  
  useEffect(() => {
  const projectTab = document.querySelector('.projects')
  const experienceTab = document.querySelector('.experience')
  const contactTab = document.querySelector('.contact')
    console.log(location)
    if(location === 'projects') {
      projectTab.classList.add('selected')
      projectTab.parentNode.classList.add('selected')
    } else if(location === 'experience') {
      experienceTab.classList.add('selected')
      experienceTab.parentNode.classList.add('selected')
    } else if(location === 'contact') {
      contactTab.classList.add('selected')
      contactTab.parentNode.classList.add('selected')
    }
  })



  
  return (
    <>
    <nav className='header'>
      <a style={{textDecoration: 'none', color: 'black'}} href='/'><h1 className='header-options'>Corbin March</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/projects'><h1 className='header-options projects'>Projects</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/experience'><h1 className='header-options experience'>Experience</h1></a>
      <a style={{textDecoration: 'none', color: 'black'}} href='/contact'><h1 className='header-options contact'>Contact</h1></a>
    </nav>
    </>
  )
}

export default Header