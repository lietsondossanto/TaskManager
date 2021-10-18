import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

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

        <PrivateRoute path="/add" component={Add} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/dashboard" component={Dashboard} />

        <Route path="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
