import axios from 'axios';
const categoriesApi = {

  getAllCategories() {
    return axios.get('https://infonews-payareli.herokuapp.com/api/allCategories')
      .then(res => res.data)
      .catch(e => [])
  },

  addNewCategory(newCategory) {
    return axios.post('https://infonews-payareli.herokuapp.com/api/addCategory', newCategory)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  },

  editCategory(editedCategory) {
    return axios.put('https://infonews-payareli.herokuapp.com/api/editCategory', editedCategory)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  },

  removeCategory(id) {
    return axios.delete(`https://infonews-payareli.herokuapp.com/api/removeCategory/${id}`)
      .then(res => res.data)
      .catch(e => { throw new Error(e.response.data.message) });
  }
}
export default categoriesApi;
