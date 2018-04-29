import 'babel-polyfill'
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  transitions,
  VDivider,
  VSubheader,
  VExpansionPanel,
  VSelect
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import App from './App.vue'
import Components from 'components/_index'

import { createStore } from 'store/index'
import { createRouter } from 'router/index'
import { sync } from 'vuex-router-sync'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    transitions,
    VDivider,
    VSubheader,
    VExpansionPanel,
    VSelect
  }
})

Vue.filter('toDateString', (date) => {
  const stringDate = new Date(date);
  const resultString = `${stringDate.getDate() < 10 ? '0' + stringDate.getDate() : stringDate.getDate()}.${stringDate.getMonth() + 1 < 10 ? '0' + (stringDate.getMonth() + 1) : stringDate.getMonth() + 1}.${stringDate.getFullYear()} - ${stringDate.getHours() < 10 ? '0' + stringDate.getHours() : stringDate.getHours()}:${stringDate.getMinutes() < 10 ? '0' + stringDate.getMinutes() : stringDate.getMinutes()}`
  return resultString
})

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp (ssrContext) {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
