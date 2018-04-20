import axios from 'axios';
const categoriesApi = {

  getAllCategories() {
    return axios.get('http://localhost:3232/api/allCategories')
      .then(res => res.data)
      .catch(e => [])
  },

  addNewCategory(newCategory) {
    return axios.post('http://localhost:3232/api/addCategory', newCategory)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  },

  editCategory(editedCategory) {
    return axios.put('http://localhost:3232/api/editCategory', editedCategory)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  },

  removeCategory(id) {
    return axios.delete(`http://localhost:3232/api/removeCategory/${id}`)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  }
}
export default categoriesApi;
