import React from 'react'
import Header from '../header/Header'
import './Experience.css'

const Experience = () => {
  return(
    <>
    <Header location={'experience'} />
    <div className='experience-page fade-in'>
    <h1 className="experience-title">Experience</h1>
    <h3 className="experience-text">I am a graduate from Turing school of technology and design. A Full-time, 1500+ hours, 7 month accredited program working with and tested in languages JavaScript, HTML, CSS, React, Redux, Node and Express.
Technologies include Git, Github, Heroku and Netlify.
Using Methodologies of Agile, Test Driven Development, RESTful design, Service Oriented Architecture (SOA), Object-Oriented Programming, UI/UX user oriented design.
    

     I'm a dedicated, goal oriented team player. I have experience working both solo and in group projects ranging from 1-6 people using an agile, professional workflow with experience in rebasing. I have worked on both new and existing code bases and am comfortable adapting with pre-existing projects. Currently, I have experience working with the following technologies: </h3>
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
        <li>Rebase</li>
        <li>Jest</li>
        <li>OOP</li>
        <li>Bootstrap</li>
        <li>SASS</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Agile Workflow</li>
    </ul>
    <h3 className='exp-text'>
       I am excited to work in the field, learn new technologies and look forward to working with new teams on all manner of original, impactful projects!
    </h3>
    </div>
    </>
  )
}

export default Experience