import React from 'react'
import Header from '../header/Header'
import './Experience.css'

const Experience = () => {
  return(
    <>
    <Header location={'experience'} />
    <div className='experience-page fade-in'>
    <h1 className="page-title">Experience</h1>
    <h3>I am a graduate from Turing school of technology and design. I'm a dedicated, goal oriented team player. I have experience working both solo and in group projects ranging from 1-6 people using an agile, professional workflow with experience in rebasing. I have worked on both new and existing code bases and am comfortable adapting with pre-existing projects. Currently, I have experience working with the following technologies: </h3>
    <ul className='exp-list'>
       <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JSON</li>
        <li>React</li>
        <li>React Hooks</li>
        <li>Vue.js</li>
        <li>Jest</li>
        <li>Node.js</li>
        <li>React Testing Library</li>
        <li>Redux</li>
    </ul>
    <h3 className='exp-text'>
       I am excited to work in the field, learn new technologies and look forward to working with new teams on all manner of original, impactful projects!
    </h3>
    </div>
    </>
  )
}

export default Experience