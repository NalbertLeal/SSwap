<template lang="pug">
  #menu-nav-top
    img(class="menu-logo" src="../assets/imgs/SSWAP-branco-sem-slog.png" @click="goHome()")
    SearchInput(class="nav-search-input" v-if="showSearchInput")
    Buttom(v-if="this.$store.state.loginToken == ''" :classes="'botao-signin-signup'" value="LOGIN / SIGN UP" :clickEvent="openLoginScreen")
    p(class='logout' v-if="this.$store.state.loginToken != ''" @click="userLogout()") LOGOUT
    font-awesome-icon(class='icon-menu-bars' :icon=['fas', 'bars'] @click="openLoginScreen()")
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#menu-nav-top {
  align-items: center;
  background: $color-purple;
  border-top: 0.1rem solid $color-green;
  box-shadow: 0px 0px 10px #000;
  box-sizing: border-box;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  padding: 0px 2rem;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 1;

  > .menu-logo {
    // background: url("../assets/imgs/SSWAP-branco-sem-slog.png") 100%;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    height: auto;
    width: 8rem;
  }

  > .nav-search-input {
    max-width: 30rem;
    width: 100%;
  }

  > .botao-signin-signup {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
    }
  }

  > .logout {
    color: #fff;
    cursor: pointer;
  }

  > .icon-menu-bars {
    color: #fff;
    font-size: 1.5rem;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>

<script>
import SearchInput from "./SearchInput.vue";
import Buttom from "./Buttom.vue";

import Logout from '../scripts/api/logout'

export default {
  components: {
    SearchInput,
    Buttom
  },
  data() {
    return {
      showSearchInput: this.$store.state.showSearchInput
    }
  },
  methods: {
    openLoginScreen() {
      this.$router.push({ name: 'login'})
      // this.router.push({ name: 'user', params: { userId: '123' } })
    },
    async userLogout() {
      this.$store.commit('logout')
      this.$router.push({name: "home"})
      await Logout(this.$store.state.loginToken)
    },
    goHome() {
      this.$router.push({name: "home"})
    }
  },
  async mounted() {
    this.$router.beforeEach((to, from, next) => {
      // console.log(this.$router.currentRoute)
      if(window.location.pathname !== "/") {
        this.$store.commit("changeShowSearchInput", true);
      }
      else {
        this.$store.commit("changeShowSearchInput", false);
      }
      next();
    })
  }
}
</script>
