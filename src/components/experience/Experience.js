import React from 'react'
import Header from '../header/Header'
import './Experience.css'

const Experience = () => {
  return(
    <>
    <Header location={'experience'} />
    <div className='experience-page fade-in'>
    <h1 className="experience-title">Experience</h1>
    <h3 className="experience-text">My name is Corbin March and I am a software developer. 
    <hr className="white-space"/>
    I am a graduate from Turing school of technology and design. A Full-time, 1500+ hours, 7 month accredited program working with and tested in languages such as <h4 className='bold-text'>JavaScript, HTML, CSS, React, Redux, Node and Express</h4>.
    <hr className="white-space"/>
I have experience working with popular agile workflow tools <h4 className='bold-text'>Git and Github</h4> and also work with deployment software such as <h4 className='bold-text'>Heroku and Netlify</h4>.
Using Methodologies of <h4 className='bold-text'>Agile, Test Driven Development, RESTful API design, Service Oriented Architecture (SOA), Object-Oriented Programming, UI/UX</h4> user oriented design.
<hr className="white-space"/>
     I'm a dedicated, goal oriented team player. I have participated in projects working both solo and in groups ranging from 1-6 people using an <h4 className="bold-text">agile professional workflow</h4> with experience in <h4 className="bold-text">rebasing</h4>. I have worked on both new and existing code bases and am comfortable adapting with pre-existing projects. Currently, I have experience working with the following technologies: </h3>
    <ul className='exp-list'>
        <li>Javascript</li>
        <li>HTML5</li>
        <li>React</li>
        <li>React Hooks</li>
        <li>React Native</li>
        <li>Git Workflow</li>
        <li>Mocha/Chai</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>Restful API</li>
        <li>Vue.js</li>
        <li>Rebase (GitHub)</li>
        <li>Jest</li>
        <li>OOP</li>
        <li>Bootstrap</li>
        <li>SASS</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Agile Workflow</li>
        <li>MySQL</li>
    </ul>
    <h3 className='exp-text'>
       I am excited to work in the field, learn new technologies and look forward to working with new teams on all manner of original, impactful projects!
    </h3>
    </div>
    </>
  )
}

export default Experience