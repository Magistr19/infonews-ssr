import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Api } from './Api'
Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      postsList: [],
      currentPost: {
        _id: null,
        title: '',
        date: '',
        content: '',
        author: '',
        views: null,
        category: {},
        shortcat: ''
      },
      categoriesList: []
    },

    actions: {
      fetchLastPosts ({ commit }) {
        return Api.getLastPostsInAllCategories()
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
          
      },
      fetchPostsByCategory ({ commit }, { category, from, to, sort }) {
        return Api.getPostsByCategory(category, from, to, sort)
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
      },
      fetchOnePost ({ commit }, postId) {
        return Api.getPostById(postId)
          .then(post => commit('setPost', post))
          .catch(e => { throw new Error(e.message) })
      },
      fetchCategories ({ commit }) {
        return Api.getAllCategories()
          .then(categories => {
            commit('setCategories', categories)
          })
          .catch(e => console.log('Error: ', e))
      },
      fetchAllPosts ({ commit }, { from, to, sort }) {
        return Api.getAllPosts(from, to, sort)
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
      }
    },

    mutations: {
      setPostsList (state, posts) {
        state.postsList = posts
      },
      setPost (state, post) {
        state.currentPost = post
      },
      setCategories (state, categories) {
        state.categoriesList = categories
      }
    },

    getters: {
      posts: (state) => state.postsList,
      categories: (state) => state.categoriesList,
      currentPost: (state) => state.currentPost
    }
  })
}