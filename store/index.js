import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Api } from './Api/Api'
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
        console.log('Fetch last posts')
        return Api.getLastPostsInAllCategories()
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
          
      },
      fetchPostsByCategory ({ commit }, { category, from, to, sort }) {
        console.group('Fetch posts')
        console.log('Category: ', category)
        console.log('From: ', from)
        console.log('To: ', to)
        console.log('Sort: ', sort)
        console.groupEnd()
        return Api.getPostsByCategory(category, from, to, sort)
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
      },
      fetchOnePost ({ commit }, postId) {
        console.log('Fetch post: ', postId)
        return Api.getPostById(postId)
          .then(post => commit('setPost', post))
          .catch(e => { throw new Error(e.message) })
      },
      fetchCategories ({ commit }) {
        console.log('Fetch categories')
        return Api.getAllCategories()
          .then(categories => {
            commit('setCategories', categories)
          })
          .catch(e => console.log('Error: ', e))
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