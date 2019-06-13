import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'
import cache from './scripts/cache'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginToken: localStorage.loginToken || "",
    showSearchInput: localStorage.showSearchInput || false,
    loggingFail: localStorage.loggingFail || false,
    signupFail: localStorage.signupFail || false,
    loggingIn: localStorage.loggingIn || false,
    regexEmail: /^[a-zA-Z\_\.]+\@[a-zA-Z]+\.[a-zA-Z\_\.]+/g,
    regexWhiteSpace: /[\ ]/g,
    regexNotSqlInjection: /[\"\']+/g
  },
  mutations: {
    storeToken: (state, token) => {
      state.loginToken = token
      cache.saveStoreOnCache(state)
    },
    logout: (state) => {
      state.loginToken = ''
      cache.saveStoreOnCache(state)
    },
    signupFailed: state => {
      state.signupFail = true
      cache.saveStoreOnCache(state)
    },
    signupSucess: state => {
      state.signupFail = false
      cache.saveStoreOnCache(state)
    },
    logginSuccess: state => {
      state.loggingFail = false
      cache.saveStoreOnCache(state)
    },
    logginFailed: state => {
      state.loggingFail = true
      cache.saveStoreOnCache(state)
    },
    loginStart: state => {
      state.loggingIn = true
      cache.saveStoreOnCache(state)
    },
    loggingStop: (state) => {
      state.loggingIn = false
      cache.saveStoreOnCache(state)
    },
    changeShowSearchInput: (state, showSearchInput) => {
      state.showSearchInput = showSearchInput
      cache.saveStoreOnCache(state)
    },
    changeLoggedIn: (state, showSearchInput) => {
      state.showSearchInput = showSearchInput
      cache.saveStoreOnCache(state)
    }
  },
  actions: {
    changeShowSearchInput: state => state.showSearchInput,
    changeLoggedIn: state => state.loggedIn,
  }
})
