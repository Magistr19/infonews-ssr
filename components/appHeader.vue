<template lang='pug'>
  div
    v-navigation-drawer(v-model='drawer' fixed app)
      v-toolbar
        v-toolbar-title Категории
      v-list(dense)
        v-list-tile(v-for='category,i in categories' :key='i')
          v-btn(:to='"/categories/" + category.link' flat) {{ category.title }}
    v-toolbar(fixed app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title
        router-link(to='/' style='text-decoration: none')
          span.red--text Info
          span News
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      drawer: true
    }
  },

  computed: {
    ...mapGetters(['categories'])
  }
}
</script>

<style>

</style>
