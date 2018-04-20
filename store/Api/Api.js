import axios from 'axios';
import categoriesApi from './categoriesApi';
import postsApi from './postsApi';
import usersApi from './usersApi';

export const Api = {
  categoriesApi,
  postsApi,
  usersApi,
  logIn(authData) {
    return axios.post('http://localhost:3232/api/logIn', authData)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message); })
  },
  logOut() {
    return axios.post('http://localhost:3232/api/logOut')
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message); })
  }
}
