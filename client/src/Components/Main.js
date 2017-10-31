import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Register from './Registration'
import Profile from './Profile'
import PlayerDirectory from './PlayerDirectory'
import Schedule from './Schedule'




// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/register' component={Register}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/playerdirectory' component={PlayerDirectory}/>
    </Switch>
  </main>
)

export default Main
