import React from 'react'
import { Router, Route } from 'react-router-dom'
import Contact from '../components/contact/Contact'

const Routing = () => {
  return(
<Router>
  <Route path='/contact'>
    <Contact />
  </Route>
</Router>
  )
}

export default Routing