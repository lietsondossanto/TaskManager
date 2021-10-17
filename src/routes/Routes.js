import React from 'react'
import ProtoTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/Dashboard" />
  }

  return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
  isPrivate: ProtoTypes.bool,
  component: ProtoTypes.oneOfType([ProtoTypes.element, ProtoTypes.func])
    .isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
