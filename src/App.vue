<template lang="pug">
  //- <div id="app">
  //-   <div id="nav">
  //-     <router-link to="/">Home</router-link> |
  //-     <router-link to="/about">About</router-link>
  //-   </div>
  //-   <router-view/>
  //- </div>
  #app
    MenuNav
    router-view
</template>

<style lang="scss">
@import "./assets/scss/variables.scss";

body {
  font-size: 16px;
  min-height: 100%;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  border-top: 0.2rem solid $color-green;
}
</style>

<script>
import MenuNav from "./components/MenuNav.vue";
import SearchInput from "./components/SearchInput";

export default {
  components: {
    MenuNav,
    SearchInput
  }
}
</script>
