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
        <h1 className="project-title">Done With It (React Native)</h1>
        <p className="project-description">Done With It is a consumer selling app prototype. <br/>

        <hr className="white-space"/>

        <h3 className='bold-text'>Features:</h3> Users are able to create an account, make listings and send messages for sale inquiries. The app is made with a clean and efficient phone interface that is easy to understand and navigate. <br/>
        <hr className="white-space"/>

        <h3 className='bold-text'>Technologies Used: </h3>The app is built with <h4 className="bold-text">React native</h4> and uses many popular technologies such as <h4 className='bold-text'>SecureStore, Yup and Formik</h4>. It also features <h4 className='bold-text'>persistent login</h4> after a user leaves and allows users to upload their own pictures with detailed descriptions.</p>
        <section className="project-options">
          <a className="option-link" href='https://github.com/MarchCorbin/SellingAppNative' target="_blank">Code</a>
        </section>
        <section className="project-showcase">
          <img className="showcase-image"  src="https://user-images.githubusercontent.com/54864865/115912299-5d8d7500-a42c-11eb-8f5f-027b1a5464a0.gif" alt="logging in" />
          <img className="showcase-image" src="https://user-images.githubusercontent.com/54864865/115912543-b0ffc300-a42c-11eb-874e-18e5ba7c966e.gif" alt="messaging" />
          <img className="showcase-image" src="https://user-images.githubusercontent.com/54864865/115912654-d5f43600-a42c-11eb-9aa9-f978ed4c4775.gif" alt="checking messages" />
          <img className="showcase-image"src="https://user-images.githubusercontent.com/54864865/115912783-00de8a00-a42d-11eb-8319-4b68b1dfc000.gif" alt="Add a listing" />
          <img className="showcase-image"src="https://user-images.githubusercontent.com/54864865/115912900-27042a00-a42d-11eb-8f66-8c71daf0db16.gif" alt="persistent login" />
        </section>
      </div>



      <div className="single-project">
        <h1 className="project-title">Career Day (React Hooks)</h1>
        <p className='project-description'>
          Career Day is an interactive childrens career finding app.
          <hr className="white-space"/>
          <h3 className="bold-text">Features: </h3>
           Built using a custom made API, The application is full of art and color with a smooth mobile first interface that is easy to understand and fun to interact with. Each career comes with its own custom artwork, descriptions and embedded videos.
           <hr className="white-space"/>
           <h3 className='bold-text'>Technologies Used: </h3>
           The app is made with <h4 className='bold-text'>React Hooks</h4> using an in house designed API built with <h4 className='bold-text'>Express</h4> utilizing a <h4 className='bold-text'>RESTful API architecture</h4> and tested with the <h4 className='bold-text'>Mocha/Chai</h4> testing suite.

        </p>
        <section className="project-options">
        <a className="option-link" href="http://career-day-fe.herokuapp.com" target="_blank">Website</a>
        <a className="option-link" href='https://github.com/Career-Day/career-day-fe' target="_blank">Code</a>
        </section>
        <img style={{height: 812, width:375}} className='project-image' src='https://user-images.githubusercontent.com/61163743/98181671-0e28ac00-1ec1-11eb-8820-e90ed43ca4b6.gif' alt='career project showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">Crate: Profile Feature Set (Redux)</h1>
        <p className='project-description'>Crate is a pre-existing clothing subscription website needing a feature set that allows users to create, update and customize their own profile according to their needs.
        <hr className="white-space"/>
        <h3 className='bold-text'>Features: </h3>
         In the course of the project the front end team (3 devs) added a feature set that would allow a user to create and update their profile with an image, personal description and address. The user can also check on the status of their previous, current and pending orders.
         <hr className="white-space"/>
         <h3 className='bold-text'>Technologies Used:</h3> Crate was built on a pre-existing 
         <h4 className='bold-text'> Redux </h4>
          code base using a pre-built <h4 className='bold-text'>Express backend</h4> utilizing a <h4 className='bold-text'>RESTful API architecture</h4> and updating user data via the <h4 className='bold-text'>Redux lifecycle</h4>, implementing <h4 className='bold-text'>actions and reducers</h4> to then update the store to then visually represent a consistently updated user profile.
         </p>
        <section className="project-options">
          <a className="option-link" href='https://github.com/MarchCorbin/crate' target="_blank">Code</a>
        </section>
       <img className='project-image' src='https://camo.githubusercontent.com/97ae9aae851aeefefe7f86b8b055f1f38fa1aff82b67f3484a82df36d17d64f4/687474703a2f2f672e7265636f726469742e636f2f583934486152785371362e676966' alt='crate showcase' />
      </div>
      <div className='single-project'>
      <h1 className='project-title'>Who's That Pokemon? (React Hooks)</h1>
      <p className='project-description'>
        Who 's That Pokemon is a game and pokedex built using the Pokemon API. Themed to look like an old school gameboy game, the application has a layout compatible with both phones and desktops. Built over the course of one week using React Hooks the game shows off a fluid and fast style, designed with a robust testing library using Jest. 
      </p>
      <section className="project-options">
        <a className="option-link" href="https://whosthatpokemongame.netlify.app" target="_blank">Website</a>
        <a className="option-link" href='https://github.com/MarchCorbin/whos-that-pokemon' target="_blank">Code</a>
        </section>
        <img className='project-image' src='https://user-images.githubusercontent.com/54864865/88721582-e49efe00-d0e3-11ea-969d-36e22fe05ff5.gif' alt='pokemon showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">SpellBook (Vue.js)</h1>
        <p className='project-description'>Harry Potters' Spellbook is an application built using Vue.js over the course of one week. Using the Harry Potter API combined with customized art designed for the app, a user can craft a custom spell to then add to the abundant existing lore potions and magic cantations. After adding their own spell they can then organize and filter through the various spells using the various spell types in the Harry Potter universe.</p>
        <section className="project-options">
          <a target="_blank" href='https://hpspellbook.netlify.app' className='option-link'>Website</a>
          <a target="_blank" href='https://github.com/MarchCorbin/spellbook' className='option-link'>Code</a>
        </section>
        <img className="project-image" src='https://github.com/MarchCorbin/spellbook/raw/master/src/srcassets/create-spell.gif' alt='spellbook showcase' />
      </div>
      <div className='single-project'>
        <h1 className="project-title">Rancid Tomatillos (React)</h1>
        <p className='project-description'>Rancid Tomatillos is a movie presentation application built over the course of two weeks with React.js. Using an external movie API with preexisting users, the app allows a user to sign in to their personal account, create a list of favorite films to return to later and leave comments for individual movies.</p>
        <section className="project-options">
          <a target="_blank" href='https://rancidtomatillos.netlify.app' className="option-link">Website</a>
          <a target="_blank" href='https://github.com/MarchCorbin/RancidTomatillios' className="option-link">Code</a>
        </section>
        <img className="project-image" src='/assets/Logginginandcomment.gif' alt='tomatillos showcase' />
      </div>
    </div>
  </>
  )
}

export default Projects