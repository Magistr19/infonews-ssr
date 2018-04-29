<template lang='pug'>
  v-layout
    v-flex
      v-select(:items='sortOptions' v-model='selectedSort' label='Сортувати по')
      v-btn(block @click='loadPrev' v-if='from > 0' id='start' color='primary') Попередні 5
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
                        span.ml-2 {{ post.date | toDateString }}
                    v-flex
                      span.px-2
                        v-icon(left) account_circle
                        span.ml-2 {{ post.author }}
        v-divider
      v-btn(block @click='loadNext' v-if='posts.length >= 5' id='end' color='primary') Наступні 5
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  asyncData ({ store }) {
    store.dispatch('fetchAllPosts', { from: 0, to: 5, sort: '' })
  },

  data () {
    return {
      from: 0,
      to: 5,
      selectedSort: '',
      sortOptions: [
        { value: '', text: 'За умовчанням' },
        { value: 'new', text: 'Спочатку нові' },
        { value: 'old', text: 'Спочатку старі' },
        { value: 'popular', text: 'Спочатку популярні' }
      ]
    }
  },

  computed: mapGetters(['posts']),

  methods: {
    ...mapActions(['fetchAllPosts']),
    loadNext () {
      this.from += 5
      this.to += 5
      this.fetchAllPosts({ from: this.from, to: this.to, sort: this.selectedSort })
        .then(() => { window.location.hash = 'start' })
    },
    loadPrev () {
      this.to = this.from
      this.from -5 ? this.from -= 5 : this.from = 0
      this.fetchAllPosts({ from: this.from, to: this.to, sort: this.selectedSort })
        .then(() => { window.location.hash = 'end' })
    }
  },

  watch: {
    'selectedSort': function (sort) {
      this.fetchAllPosts({ from: this.from, to: this.to, sort })
    }
  }
}
</script>

<style>

</style>
