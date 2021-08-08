import React, { Component } from "react"
import { Redirect, Route } from "react-router-dom"

export default class AuthRoute extends Component {
  render() {
    const { routerConfig, location } = this.props
    const { pathname } = location
    const targetRouterConfig = routerConfig.find(
      (item) => item.path === pathname
    )
    if (targetRouterConfig) {
      return (
        <Route
          path={pathname}
          component={targetRouterConfig.component}
          render={targetRouterConfig.render}
        />
      )
    } else {
      return <Redirect to="/124" />
    }
  }
}
