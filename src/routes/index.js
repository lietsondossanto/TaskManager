import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './../pages/Main'
import Login from './../pages/Login'
import Add from './../pages/Add'
import Profile from './../pages/Profile'
import Dashboard from './../pages/Dashboard'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/add" component={Add} />
        <Route path="/profile" component={Profile} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
