// A function which return a fresh router instance on each request
import createRouter from './router'

// A function which return a fresh store instance on each request
import createStore from './store'

// The root component
// By default it's `<router-view />` in Ream
import App from './App.vue'

export default () => {
    return {
      router: createRouter(),
      store: createStore(),
      root: App
    }
  }