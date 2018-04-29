<template lang='pug'>
  v-layout
    v-flex
      v-card
        v-card-media(:src='"https://infonews-payareli.herokuapp.com" + currentPost.picture' height='400px')
        v-card-title
          h1.headline {{ currentPost.title }}
        v-card-text(v-html='currentPost.content').post-content
        v-card-actions
          v-layout(row wrap justify-content-between)
            v-flex
              span.px-2
                v-icon(left) remove_red_eye
                span.ml-1 {{ currentPost.views }}
              span.px-2
                v-icon(left) query_builder
                span.ml-2 {{ currentPost.date | toDateString }}
            v-flex
              span.px-2
                v-icon(left) account_circle
                span.ml-2 {{ currentPost.author }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  asyncData ({ store, route }) {
    return store.dispatch('fetchOnePost', route.params.id)
  },

  computed: {
    ...mapGetters(['currentPost'])
  }
}
</script>

<style>
.post-content > * {
  color: #ffffff!important;
}
</style>
