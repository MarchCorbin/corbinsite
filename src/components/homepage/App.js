import React from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Projects from '../projects/Projects'

const App = () => {
  return (
  <BrowserRouter>
  <Route path='/projects' component={Projects} />
  <Route exact path='/contact' component={Contact} />
  <Route path='/experience' component={Experience} />
  <Route exact path='/' component={HomePage} />
  </BrowserRouter>
  )
}
export default App