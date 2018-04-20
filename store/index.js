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
      categoriesList: [],
      users: [],
      currentUser: {},
      authToken: ''
    },

    actions: {
      fetchLastPosts ({ commit }) {
        console.log('Fetch last posts')
        return Api.postsApi.getLastPostsInAllCategories()
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
          
      },
      fetchPostsByCategory ({ commit }, { category, from, to }) {
        console.group('Fetch posts')
        console.log('Category: ', category)
        console.log('From: ', from)
        console.log('To: ', to)
        console.groupEnd()
        return Api.postsApi.getPostsByCategory(category, from, to)
          .then(posts => commit('setPostsList', posts))
          .catch(e => console.error(e))
      },
      fetchOnePost ({ commit }, postId) {
        console.log('Fetch post: ', postId)
        return Api.postsApi.getPostById(postId)
          .then(post =>commit('setPost', post))
          .catch(e => console.log(e))
      },
      fetchCategories ({ commit }) {
        console.log('Fetch categories')
        return Api.categoriesApi.getAllCategories()
          .then(categories => {
            commit('setCategories', categories)
          })
          .catch(e => console.log('Error: ', e))
      },
      logIn ({ commit }, { login, password }) {
        console.group('LogIn')
        console.log('Login: ', login, ' Password: ', password)
        console.groupEnd()
      },
      logOut ({ commit }) {
        console.log('Logout')
      }
    },

    mutations: {
      setPostsList (state, posts) {
        state.postsList = posts
      },
      setPost (state, post) {
        state.currentPost = post
      },
      setCurrentUser (state, { user, token }) {
        state.currentUser = user
        state.authToken = token
        sessionStorage.setItem('infonews-token', token)
      },
      clearCurrentUser (state) {
        state.authToken = ''
        sessionStorage.removeItem('infonews-token')
        state.currentUser = {}
      },
      setCategories (state, categories) {
        state.categoriesList = categories
      }
    },

    getters: {
      posts: (state) => state.postsList,
      categories: (state) => state.categoriesList,
      user: (state) => state.currentUser,
      users: (state) => state.users,
      currentPost: (state) => state.currentPost
    }
  })
}