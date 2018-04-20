import axios from 'axios';
const postsApi = {
  getPostsByCategory(cat, from, to) {
    return axios.get(`https://infonews-payareli.herokuapp.com/api/posts/${cat}`, { params: { from, to }})
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
      .catch(e => { throw new Error(e) });
  },
  getAllPostsPreview(token) {
    return axios.get('https://infonews-payareli.herokuapp.com/api/postsAll', { headers: { token }})
      .then(res => res.data)
      .catch(e => [])
  },
  addNewPost(post) {
    return axios.post('https://infonews-payareli.herokuapp.com/api/addNewPost', post)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
  editPost(post, id) {
    return axios.put(`https://infonews-payareli.herokuapp.com/api/editPost/${id}`, post)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
  removePost(id) {
    return axios.delete(`https://infonews-payareli.herokuapp.com/api/removePost/${id}`)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
};

export default postsApi;
