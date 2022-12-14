import ServiceClient from './serviceClientConfig';
import Config from 'react-native-config';

const serviceClient = new ServiceClient({
    baseURL: Config.API_BASE_URL,
  });
  
  export const getUserList = () => {
    return serviceClient.get('users');
  };
  