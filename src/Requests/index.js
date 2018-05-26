import React from 'react';
import axios from 'axios';
import { getApiConfig } from '../config';

const axiosOpt = getApiConfig();

const createAxiosInstance = (logoutCallback) => {
  const apiClient = axios.create(axiosOpt);
  console.log('oiiiiiiiiiii')
  apiClient.interceptors.response.use((response) => {
    const { status } = response;
    if(status === 401 || status === 403) {
      logoutCallback && logoutCallback();
    }

    console.log('responsedasdasdasdasdasdsadasdsa =====>', status)
    return response.data;
  }, function(error) { 
    //const err = JSON.parse(error)
    //const err = Object.assign({}, error)
    //const { response: { status }} = error
    console.log(JSON.stringify(error))

    return error
  });

  return apiClient;
}

const { Provider, Consumer } = React.createContext('Request');

class RequestProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      apiClient: createAxiosInstance(this.handleNotAllowedAccess)
    }
  }

  handleNotAllowedAccess = () => {
    console.log("Not Allowed")
  }
  
  render = () => {
    const { children } = this.props;
    return <Provider value={this.state.apiClient}>
      {children}
    </Provider>
  }
}

const withRequest = (Component) => {
  return (props) => (
    <Consumer>
      {(request) => (<Component request={request} {...props}/>)}
    </Consumer>
  )
}

export {
  RequestProvider,
  withRequest,
};