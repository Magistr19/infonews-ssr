import axios from 'axios';
const postsApi = {
  getPostsByCategory(cat, from, to) {
    return axios.get(`http://localhost:3232/api/posts/${cat}`, { params: { from, to }})
        .then(res => res.data)
        .catch(e => []);
  },
  getLastPostsInAllCategories(count) {
    return axios.get('http://localhost:3232/api/lastPosts')
      .then(res => res.data)
      .catch(e => [])
  },
  getPostById(id) {
    return axios.get(`http://localhost:3232/api/post/${id}`)
      .then(res => res.data)
      .catch(e => { throw new Error(e) });
  },
  getAllPostsPreview(token) {
    return axios.get('http://localhost:3232/api/postsAll', { headers: { token }})
      .then(res => res.data)
      .catch(e => [])
  },
  addNewPost(post) {
    return axios.post('http://localhost:3232/api/addNewPost', post)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
  editPost(post, id) {
    return axios.put(`http://localhost:3232/api/editPost/${id}`, post)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
  removePost(id) {
    return axios.delete(`http://localhost:3232/api/removePost/${id}`)
      .then(res => res)
      .catch(e => { throw new Error(e.response.data.message) })
  },
};

export default postsApi;
