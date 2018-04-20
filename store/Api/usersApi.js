import axios from 'axios';
const usersApi = {
  getCurrentUser(token) {
    return axios.get('http://localhost:3232/api/getCurrentUser', { headers: { token }})
      .then(res => res.data)
      .catch(() => {})
  },
  getAllUsers() {
    return axios.get('http://localhost:3232/api/getAllUsers')
      .then(res => res.data)
      .catch(() => [])
  },
  createNewUser(userData) {
    return axios.post('http://localhost:3232/api/createNewUser', userData)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message); })
  }
}

export default usersApi;
