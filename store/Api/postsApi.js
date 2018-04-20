import axios from 'axios';
const postsApi = {
    getPostsByCategory(cat, from, to) {
        return axios.get(`http://localhost:3232/api/posts/${cat}`, { params: { from, to }})
            .then(response => { console.log(response.data.length); return response.data })
            .catch(e => { console.error(e); return []; });
    },
    getLastPostsInAllCategories(count) {
        return axios.get('http://localhost:3232/api/lastPosts')
            .then(response => { return response.data; })
            .catch(e => { console.error(e); return []; });
    },
    getPostById(id) {
        console.log(id);
        return axios.get(`http://localhost:3232/api/post/${id}`)
            .then(response => { console.log(response); return response.data })
            .catch(e => { throw new Error(e) });
    },
    getAllPostsPreview(token) {
        return axios.get('http://localhost:3232/api/postsAll', { headers: { token }})
            .then(response => { console.log(response.data); return response.data; })
            .catch(e => { console.error(e); return []; });
    },
    addNewPost(post) {
        console.log(post);
        return axios.post('http://localhost:3232/api/addNewPost', post)
            .then(response => { return response; })
            .catch(e => { console.error(e); });
    },
    editPost(post, id) {
        console.log(post);
        return axios.put(`http://localhost:3232/api/editPost/${id}`, post)
            .then(response => { console.log(response); return response; })
            .catch(e => { console.error(e); });
    },
    removePost(id) {
        console.log(id);
        return axios.delete(`http://localhost:3232/api/removePost/${id}`)
            .then(response => { console.log(response); return response; })
            .catch(e => { console.error(e); });
    },
};

export default postsApi;
