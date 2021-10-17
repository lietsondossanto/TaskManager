import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Routes'

import Main from './../pages/Main'
import Login from './../pages/Login'
import Add from './../pages/Add'
import Profile from './../pages/Profile'
import Dashboard from './../pages/Dashboard'
import PageNotFound from './../pages/PageNotFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Login" component={Login} />

        <Route path="/add" component={Add} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/Dashboard" component={Dashboard} isPrivate />

        <Route path="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
