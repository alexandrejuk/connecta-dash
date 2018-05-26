import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

class RouteWithSubRoutes extends PureComponent {

  renderSubRoutes = ({component = null, allowedRoles = ['*'], exact = false, path, redirectTo}) => {
    return <ProtectedRoute
      path={path}
      exact={exact}
      component={component}
      key={path}
      redirectTo={redirectTo}
      allowedRoles={allowedRoles}
    />
  }
  render = () => {
    const {
      component,
      allowedRoles = ['*'],
      path,
      exact = false,
      subroutes = [],
    } = this.props;
    
    if(subroutes.length > 0){
      return (
        <Switch>
          {
            subroutes.map(this.renderSubRoutes)
          }
        </Switch>
      )
    }

    if(component){
      return <ProtectedRoute
        path={path}
        exact={exact}
        component={component}
        allowedRoles={allowedRoles}
      />
    }

    return null
  }
}

export default RouteWithSubRoutes