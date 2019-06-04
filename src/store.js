import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSearchInput: false
  },
  mutations: {
    changeShowSearchInput: (state, showSearchInput) => state.showSearchInput = showSearchInput
  },
  actions: {
    changeShowSearchInput: state => state.showSearchInput
  }
})
