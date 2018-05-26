import { getConfig } from './utils';

const apiConfig = {
  production: {
    baseURL: 'hey'
  },
  development: {
    baseURL: 'http://localhost:4000/api/',
    headers: {
      ApiKey: '47cadad5-f943-4633-a565-7ee260adf6a9'
    }
  }
}

export default getConfig(apiConfig);