<template lang='pug'>
v-container(grid-list-md)
  v-layout(row wrap)
    v-flex(v-for='category,i in categories' :key='i' xs12)
      v-toolbar(ligth)
        v-toolbar-title {{ category.title }}
      v-container(grid-list-md fluid)
        v-layout(row wrap)
          v-flex(v-for='post,i in postsByCategory(category.title)' :key='i' xs12 md6 :lg4='i < 3')
            template
              v-card(:to='"/post/" + post._id' style='height: 100%!important; overflow: hidden')
                v-layout(column style='height: 100%')
                  v-card-media(:src='"https://infonews-payareli.herokuapp.com" + post.picture' height='200px')
                  v-card-title
                    span {{ post.title.toUpperCase() }}
                  v-card-text
                    p.mb-0 {{ post.shortcat }}
                  v-card-actions.mt-auto.px-3
                    v-layout(row wrap)
                      span.px-2
                        v-icon(left) remove_red_eye
                        span.ml-1 {{ post.views }}
                      span.px-2
                        v-icon(left) query_builder
                        span.ml-2 {{ cyrToLat(post.date) }}
                      span.px-2
                        v-icon(left) account_circle
                        span.ml-2 {{ post.author }}
              v-divider
</template>

<script>
import { mapGetters } from 'vuex'
import cyrToLat from '../assets/cyrToLat'

export default {
  asyncData ({ store }) {
    return store.dispatch('fetchCategories')
      .then(() => store.dispatch('fetchLastPosts'))
  },

  computed: {
    ...mapGetters(['posts', 'categories'])
  },

  methods: {
    postsByCategory(postCat) {
      return this.posts.filter(post => post.categories.title === postCat);
    },
    cyrToLat
  }
}
</script>

<style>

</style>
