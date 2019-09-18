<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{articleList}}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'home',
    getInitialData({ store, route }) {
      return store.dispatch('fetchArticleList')
    },
    computed: {
      ...mapState(['articleList'])
    },
    created() {
      if (process.browser) {
        console.log(window)
      }
    },
    mounted() {
    }
  }
</script>
