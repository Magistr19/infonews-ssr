<template lang='pug'>
  v-app(dark)
    appHeader
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
    v-footer(fixed app)
      span &copy; 2018
</template>

<script>
  import Meta from 'mixins/meta'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mixins: [Meta],
  }
</script>
