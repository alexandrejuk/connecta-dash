import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './styles.css';
import { SideMenu } from '../../Components';
import routes from './routes';
import { RequestProvider } from '../../Requests'
import CreateProduct from './Products/CreateProduct';
import { Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from '../../utils/ProtectedRoute'
import RouteWithSubRoutes from '../../utils/RouteWithSubRoutes'

const { Header, Content } = Layout;

class LoggedPages extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderRoutes = ({
    path,
    component,
    subroutes,
    allowedRoles,
    exact,
  }) =>{
    return (<RouteWithSubRoutes
      key={path}
      path={path}
      component={component}
      exact={exact}
      subroutes={subroutes}
      allowedRoles={allowedRoles}
    />)
  }
  render() {
    const { collapsed } = this.state;
    const routesToRender  = routes.map(this.renderRoutes);
    return (
      <RequestProvider>
        <Layout style={{overflow: 'inital', minHeight: '100vh'}}>
          <SideMenu collapsed={collapsed} routes={routes}/>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{margin: '24px 16px', padding: 24, background: '#fff', overflow: 'initial' }}>
              <Switch>
                {
                  routesToRender
                }
                <Redirect to='/'/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </RequestProvider>
    );
  }
}

export default LoggedPages;