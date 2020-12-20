import React from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import HomePage from './HomePage'
import Contact from '../contact/Contact'

const App = () => {
  return (
  <BrowserRouter>
  <Route exact path='/contact' component={Contact} />
  {/* <Route exact path="/mypath" component={withRouter(MyComponent)} /> */}
  <Route exact path='/'>
    <HomePage />
  </Route>
  </BrowserRouter>
  )
}
export default App