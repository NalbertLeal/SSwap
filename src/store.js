import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginToken: "",
    accessToken: null,
    showSearchInput: false,
    loggingFail: false,
    signupFail: false,
    loggingIn: false,
    regexEmail: /[a-zA-Z\_\.]+\@[a-zA-Z]+\.[a-zA-Z\_\.]+/g,
    regexNotSqlInjection: /[\"\']+/g
  },
  mutations: {
    storeToken: (state, token) => state.loginToken = token,
    signupFailed: state => state.signupFail = true,
    signupSucess: state => state.signupFail = false,
    logginSuccess: state => state.loggingFail = false,
    logginFailed: state => state.loggingFail = true,
    loginStart: state => state.loggingIn = true,
    loggingStop: (state) => state.loggingIn = false,
    changeShowSearchInput: (state, showSearchInput) => state.showSearchInput = showSearchInput,
    changeLoggedIn: (state, showSearchInput) => state.showSearchInput = showSearchInput
  },
  actions: {
    changeShowSearchInput: state => state.showSearchInput,
    changeLoggedIn: state => state.loggedIn,
  }
})
