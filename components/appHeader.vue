<template lang='pug'>
  div
    v-navigation-drawer(v-model='drawer' fixed app)
      v-toolbar
        v-toolbar-title Категории
      v-btn(block flat to='/allPosts') Лента
      v-expansion-panel
        v-expansion-panel-content(v-for='category,i in categories' :key='i')
          v-btn(:to='"/categories/" + category.link' flat slot='header' block) {{ category.title }}
          v-btn(
            :to='"/categories/" + subcategory.link'
            flat
            v-for='subcategory,i in category.subcategories'
            :key='i' block) {{ subcategory.title }}
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
