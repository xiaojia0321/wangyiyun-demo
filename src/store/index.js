import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import personal from './modules/personal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    personal
  }
})
