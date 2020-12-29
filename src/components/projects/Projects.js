import React from 'react'
import Header from '../header/Header'
import './Projects.css'

const Projects = () => {
  return(
  <>
      <Header location={'projects'} />
    <div className="projects-page fade-in">
      <h1 className="page-title">Projects</h1>
      <div className="single-project">
        <h1 className="project-title">Career Day</h1>
        <section className="project-options">
        <a className="option-link" href="http://career-day-fe.herokuapp.com" target="_blank">Deployment</a>
        <a className="option-link" href='https://github.com/Career-Day/career-day-fe' target="_blank">Repository</a>
        </section>
        <img className='project-image' src='https://user-images.githubusercontent.com/61163743/98181671-0e28ac00-1ec1-11eb-8820-e90ed43ca4b6.gif' alt='career project showcase' />
      </div>
      <div className='single-project'>
      <h1 className='project-title'>Who's That Pokemon?</h1>
      <section className="project-options">
        <a className="option-link" href="https://whosthatpokemongame.netlify.app" target="_blank">Deployment</a>
        <a className="option-link" href='https://github.com/MarchCorbin/whos-that-pokemon' target="_blank">Repository</a>
        </section>
        <img style={{width:'45em'}} className='project-image' src='https://user-images.githubusercontent.com/54864865/88721582-e49efe00-d0e3-11ea-969d-36e22fe05ff5.gif' alt='pokemon showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">SpellBook</h1>
        <section className="project-options">
          <a target="_blank" href='https://hpspellbook.netlify.app' className='option-link'>Deployment</a>
          <a target="_blank" href='https://github.com/MarchCorbin/spellbook' className='option-link'>Repository</a>
        </section>
        <img className="project-image" src='/assets/create-spell.gif' alt='spellbook showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">Rancid Tomatillos</h1>
        <section className="project-options">
          <a target="_blank" href='https://rancidtomatillos.netlify.app' className="option-link">Deployment</a>
          <a target="_blank" href='https://github.com/MarchCorbin/RancidTomatillios' className="option-link">Repository</a>
        </section>
        <img style={{width:'45em'}} className="project-image" src='/assets/Logginginandcomment.gif' alt='tomatillos showcase' />
      </div>
    </div>
  </>
  )
}

export default Projects