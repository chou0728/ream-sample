import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      articleList: []
    },
    mutations: {
      FETCH_ARTICLELIST(state, list) {
        state.articleList = list
      },
    },
    actions: {
      async fetchArticleList({ commit }) {
        const { data } = await axios.get('https://api.esgo.com/Article_List_Get?limit=10&page=1&type=0')
        const list = data.data
        commit('FETCH_ARTICLELIST', list)
      },
    }
  })

  return store
}