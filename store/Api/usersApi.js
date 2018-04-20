import axios from 'axios';
const usersApi = {
  getCurrentUser(token) {
    return axios.get('https://infonews-payareli.herokuapp.com/api/getCurrentUser', { headers: { token }})
      .then(res => res.data)
      .catch(() => {})
  },
  getAllUsers() {
    return axios.get('https://infonews-payareli.herokuapp.com/api/getAllUsers')
      .then(res => res.data)
      .catch(() => [])
  },
  createNewUser(userData) {
    return axios.post('https://infonews-payareli.herokuapp.com/api/createNewUser', userData)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message); })
  }
}

export default usersApi;
