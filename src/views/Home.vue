<template>
  <div class="home">
    <h1>This is an home page</h1>
    <p>{{articleList}}</p>
  </div>
</template>

<script>

export default {
  name: 'home',
  head: {
    title: 'Home'
  }
}
</script>


<script>
  import { mapState } from 'vuex'

  export default {
    name: 'home',
    head: {
      title: 'Home'
    },
    getInitialData({ store, route }) {
      return store.dispatch('fetchArticleList')
    },
    computed: {
      ...mapState(['articleList'])
    },
    created() {
      if(process.brower) {
        console.log(window)
      }
    },
    mounted() {
      console.log(window)
    }
  }
</script>