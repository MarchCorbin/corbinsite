import React from 'react';
import './Resume.css'

function Resume(props) {
  return (
    <footer className='resume-footer'>
      <a className='resume-link' href='./assets/CorbinMarchResume.pdf' download>
        <h1 className='resume-text'>Download Resume</h1></a>
    </footer>
  );
}

export default Resume;