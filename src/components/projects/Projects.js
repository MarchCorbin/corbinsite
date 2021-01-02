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
        <p className='project-description'>
          Career Day is an interactive childrens career finding app. Built with React Hooks using a custom made API, The application is full of art and color with a smooth mobile first interface that is easy to understand and fun to interact with. Each career comes with its own custom artwork, descriptions and embedded videos.
        </p>
        <section className="project-options">
        <a className="option-link" href="http://career-day-fe.herokuapp.com" target="_blank">Deployment</a>
        <a className="option-link" href='https://github.com/Career-Day/career-day-fe' target="_blank">Repository</a>
        </section>
        <img className='project-image' src='https://user-images.githubusercontent.com/61163743/98181671-0e28ac00-1ec1-11eb-8820-e90ed43ca4b6.gif' alt='career project showcase' />
      </div>
      <div className='single-project'>
      <h1 className='project-title'>Who's That Pokemon?</h1>
      <p className='project-description'>
        Who 's That Pokemon is a game and pokedex built using the Pokemon API. Themed to look like an old school gameboy game, the application has a layout compatible with both phones and desktops. Built over the course of one week using React Hooks the game shows off a fluid and fast style, designed with a robust testing library using Jest. 
      </p>
      <section className="project-options">
        <a className="option-link" href="https://whosthatpokemongame.netlify.app" target="_blank">Deployment</a>
        <a className="option-link" href='https://github.com/MarchCorbin/whos-that-pokemon' target="_blank">Repository</a>
        </section>
        <img style={{width:'45em'}} className='project-image' src='https://user-images.githubusercontent.com/54864865/88721582-e49efe00-d0e3-11ea-969d-36e22fe05ff5.gif' alt='pokemon showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">SpellBook</h1>
        <p className='project-description'>Harry Potters' Spellbook is an application built using Vue.js over the course of one week. Using the Harry Potter API combined with customized art designed for the app, a user can craft a custom spell to then add to the abundant existing lore potions and magic cantations. After adding their own spell they can then organize and filter through the various spells using the various spell types in the Harry Potter universe.</p>
        <section className="project-options">
          <a target="_blank" href='https://hpspellbook.netlify.app' className='option-link'>Deployment</a>
          <a target="_blank" href='https://github.com/MarchCorbin/spellbook' className='option-link'>Repository</a>
        </section>
        <img className="project-image" src='/assets/create-spell.gif' alt='spellbook showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">Rancid Tomatillos</h1>
        <p className='project-description'>Rancid Tomatillos is a movie presentation application built over the course of two weeks with React.js. Using an external movie API with preexisting users, the app allows a user to sign in to their personal account, create a list of favorite films to return to later and leave comments for individual movies.</p>
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