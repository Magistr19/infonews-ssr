import axios from 'axios';
const categoriesApi = {

    getAllCategories() {
        return axios.get('http://localhost:3232/api/allCategories')
            .then(response => response.data)
            .catch(e => { console.error(e); return []; });
    },

    addNewCategory(newCategory) {
        return axios.post('http://localhost:3232/api/addCategory', newCategory)
            .then(response => { console.log(response); return; })
            .catch(e => console.error(e));
    },

    editCategory(editedCategory) {
        return axios.put('http://localhost:3232/api/editCategory', editedCategory)
            .then(response => { console.log(response); return; })
            .catch(e => console.error(e));
    },

    removeCategory(id) {
        return axios.delete(`http://localhost:3232/api/removeCategory/${id}`)
            .then(response => { console.log(response); return; })
            .catch(e => console.error(e));
    },

};
export default categoriesApi;
