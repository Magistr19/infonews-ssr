import axios from 'axios'

export const Api = {
  getAllCategories() {
    return axios.get('https://infonews-payareli.herokuapp.com/api/allCategories')
      .then(res => res.data)
      .catch(e => [])
  },
  getAllPosts (from, to, sort) {
    return axios.get('https://infonews-payareli.herokuapp.com/api/postsAll', { params: { from, to, sort }})
      .then(res => res.data)
      .catch(e => []);
  },
  getPostsByCategory(cat, from, to, sort) {
    return axios.get(`https://infonews-payareli.herokuapp.com/api/posts/${cat}`, { params: { from, to, sort }})
      .then(res => res.data)
      .catch(e => []);
  },
  getLastPostsInAllCategories(count) {
    return axios.get('https://infonews-payareli.herokuapp.com/api/lastPosts')
      .then(res => res.data)
      .catch(e => [])
  },
  getPostById(id) {
    return axios.get(`https://infonews-payareli.herokuapp.com/api/post/${id}`)
      .then(res => res.data)
      .catch(e => { throw new Error(e.message) });
  },
  getAllPostsPreview(token) {
    return axios.get('https://infonews-payareli.herokuapp.com/api/postsAll', { headers: { token }})
      .then(res => res.data)
      .catch(e => [])
  }
}
