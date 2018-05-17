import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom'

import { connect } from 'react-redux'

class ProtectedRoute extends Component {

  hasPermission = () => {
    const { login, allowedRoles = ['*'] } = this.props
    if(login === null){
      return false
    }

    if(allowedRoles.some(role => role === '*')){
      return true;
    } 
    
    const { roles = [] } = login
    const hasPermissions = roles.map(role => allowedRoles.some(r => r === role))
    return hasPermissions.some(role => role);
  }

  render = () => {
    const {
      login,
      component,
      path,
      redirectTo = '/login',
      exact
    } = this.props

    if(typeof component !== 'function') {
      return null
    }

    return this.hasPermission() ? (
      <Route exact={exact} component={component} path={path}/>
    ) : (
      <Redirect to={redirectTo}/>
    )
  }
}

const mapStateToProps = ({ login }) => ({login})
export default connect(mapStateToProps)(ProtectedRoute);