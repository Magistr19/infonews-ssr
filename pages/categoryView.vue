<template lang='pug'>
  v-layout
    v-flex
      h1.headline.mb-3 {{ $route.params.cat }}
      v-btn(block @click='loadPrev' v-if='from > 0') Попередні 5
      template(v-for='post,i in posts')
        v-card(:to='"/post/" + post._id' ripple).px-3.py-3
          v-layout(row wrap)
            v-flex(xs12 md3 lg4)
              img(:src='"https://infonews-payareli.herokuapp.com" + post.picture' style='max-width: 100%').d-block
            v-flex(xs12 md9 lg8)
              v-layout(column style='height: 100%')
                v-card-title
                  h3.title {{ post.title }}
                v-card-text
                  p {{ post.shortcat }}
                v-card-actions(style='margin-top: auto')
                  v-layout(row wrap justify-content-between)
                    v-flex
                      span.px-2
                        v-icon(left) remove_red_eye
                        span.ml-1 {{ post.views }}
                      span.px-2
                        v-icon(left) query_builder
                        span.ml-2 {{ cyrToLat(post.date) }}
                    v-flex
                      span.px-2
                        v-icon(left) account_circle
                        span.ml-2 {{ post.author }}
        v-divider
      v-btn(block @click='loadNext' v-if='posts.length >= 5') Наступні 5
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import cyrToLat from '../assets/cyrToLat'
export default {
  asyncData ({ store, route }) {
    return store.dispatch('fetchCategories')
      .then(() => store.dispatch('fetchPostsByCategory', { category: route.params.cat, from: 0, to: 5 }))
  },

  data () {
    return {
      from: 0,
      to: 5
    }
  },

  computed: {
    ...mapGetters(['posts'])
  },

  methods: {
    ...mapActions(['fetchPostsByCategory']),
    cyrToLat,
    loadNext () {
      this.from += 5
      this.to += 5
      this.fetchPostsByCategory({ category: this.$route.params.cat, from: this.from, to: this.to })
    },
    loadPrev () {
      this.to = this.from
      this.from -5 ? this.from -= 5 : this.from = 0
      this.fetchPostsByCategory({ category: this.$route.params.cat, from: this.from, to: this.to })
    }
  },

  watch: {
    '$route': function () {
      this.fetchPostsByCategory({ category: this.$route.params.cat, from: 0, to: 5 })
      this.from = 0
      this.to = 5
    }
  }
}
</script>

<style>

</style>
