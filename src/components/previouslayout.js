import React, { useState, useEffect } from 'react'
import './App.css';

const Apps = () => {
  const [contact, setContact] = useState(false)
  const [projects, setProjects] = useState(false)
  const [experience, setExperience] = useState(false)

 const clickhandler = e => {
    if(e.target.className.includes('contact')) {
      setContact(contact => !contact)
    } else if(e.target.className.includes('projects')) {
      setProjects(projects => !projects)
    } else if(e.target.className.includes('experience')) {
      setExperience(experience => !experience)
    }
  }

  return (
    <div className="App">
      <section className="main-border">
   <h1 className="main-name fade-in">Corbin March</h1>
   <div onClick={clickhandler} className='contact fade-in'>Contact</div>
   {contact && 
     <div>
       <h2>Email: MarchCorbin@gmail.com</h2>
       <h2>LinkedIn: https://www.linkedin.com/in/marchcorbin/</h2>
       <h2>GitHub: https://github.com/MarchCorbin</h2>
     </div>}
   <div onClick={clickhandler} className='projects fade-in'>Projects</div>
   {projects && <h3>Projects tab</h3>}
   <div onClick={clickhandler} className='experience fade-in'>Experience</div>
   {experience && 
      <div className='experience-tab'>
      <p className="experience-text">My name is Corbin March, I am a recent graduate from Turing school of technology and design. I have experience working both solo and in groups varrying from 1-6 people using an agile, professional workflow. I have worked on both new and existing code bases and am able to adapt with existing projects. During my time at Turing I have built projects using the following technologies: 
      <ul className="tech-list">
        <li>Javascript</li>
        <li> HTML</li>
        <li> CSS</li>
        <li>JSON</li>
        <li>React</li>
        <li>React Hooks</li>
        <li>Vue.js</li>
        <li>Jest</li>
        <li>Node.js</li>
        <li>React Testing Library</li>
      </ul>
        I am excited to work in the field and look forward to learning new languages and working with new people on all manner of new projects!
      <br/>
        <a href ='https://docs.google.com/document/d/1jev295hmrObRn2KJAjkJCL5iG4U1p6BkU5EPqgi2e5E/edit?usp=sharing' target="_blank">Personal Resume</a></p >
      </div>}
    </section>
    </div>
  );
}

export default App;
