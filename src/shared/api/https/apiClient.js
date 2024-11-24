import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.aviationstack.com/v1',
  params: {
    access_key: '21c41abdff19fed84ba535c5c0ae5a13',
  },
});

export default apiClient;
