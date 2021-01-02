import {React, useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


const Header = ({location}) => {
  
  useEffect(() => {
  const projectTab = document.querySelector('.projects')
  const experienceTab = document.querySelector('.experience')
  const contactTab = document.querySelector('.contact')
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
      <Link style={{textDecoration: 'none', color: 'black'}} to='/'><h1 className='header-options main'>Corbin March</h1></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/projects'><h1 className='header-options projects'>Projects</h1></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/experience'><h1 className='header-options experience'>Experience</h1></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/contact'><h1 className='header-options contact'>Contact</h1></Link>
    </nav>
    </>
  )
}

export default Header