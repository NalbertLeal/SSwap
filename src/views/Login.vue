<template lang="pug">
  #login
    .login-box
      .login
        h2 LOGIN
        input(id="email-login" placeholder="email" type="email" maxlength="50")
        .password.password-login
          input(id="password-login" placeholder="senha" :type="passwordLoginType" maxlength="50")
          font-awesome-icon(class='icon-eye' :icon=['fas', 'eye']  @click="showLoginPassword")
        p.login-fail-mesage(v-if="$store.state.loggingFail") Erro no campo de email ou senha
        Buttom(classes="buttom-login" value="ENTRAR" :clickEvent="loginUser")
      .vertical-line
        .line
      .singup
        h2 SIGN UP
        input(id="email-signup" placeholder="email" type="email" maxlength="50")
        .password.password-signup
          input(id="password-signup-input" placeholder="senha" :type="passwordSignupType" maxlength="50")
          font-awesome-icon(class='icon-eye' :icon=['fas', 'eye'] @click="showSignupPassword")
        .password.password-confirmation
          input(id="password-confirmation-signup-input" placeholder="corfirmação de senha" :type="passwordSignupType" maxlength="50")
          font-awesome-icon(class='icon-eye' :icon=['fas', 'eye'] @click="showSignupPassword")
        p.signup-fail-mesage(v-if="$store.state.signupFail") Erro no campo de email ou senha
        Buttom(classes="buttom-signup" value="ENTRAR" :clickEvent="signupUser")
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#login {
  align-items: center;
  // background: $color-purple;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5.8rem);
  justify-content: center;
  margin-top: 5.8rem;

  > .login-box {
    background: $color-purple-light;
    box-shadow: 0px 0px 10px #000;
    box-sizing: border-box;
    display: flex;
    height: 20rem;
    padding: 0px 3rem;
    position: relative;
    width: 45rem;

    input {
      background: #fff;
      border: none;
      box-sizing: border-box;
      font-size: 1.2rem;
      height: 2.5rem;
      margin-bottom: 1rem;
      padding: 0.3rem;
      width: 15rem;
    }

    .password {
      position: relative;
      width: 15rem;

      > input {
        margin-bottom: 1rem;
      }

      > .icon-eye {
        color: $color-green;
        position: absolute;
        top: 0.8rem;
        right: 0.3rem;

        &:hover {
          color: $color-orange;
          cursor: pointer;
        }
      }
    }

    > .login {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 20rem;
    
      > h2 {
        color: #fff;
        text-align: center;
      }

      > input {

      }

      > .password {

      }

      > .login-fail-mesage {
        color: #fff;
        margin-top: 0px;
      }

      > .buttom {
        width: 13.5rem;
      }
    }

    > .vertical-line {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 3rem;

      .line {
        border-left: 0.04rem solid #fff;
        height: 90%;
        width: 1rem;
      }
    }

    > .singup {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 20rem;

      > h2 {
        color: #fff;
        text-align: center;
      }

      > input {
        margin-bottom: 1rem;
      }

      > .password-signup {

      }

      > .password-confirmation {

      }

      > .signup-fail-mesage {
        color: #fff;
        margin-top: 0px;
      }

      > .buttom {
        width: 13.5rem;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Buttom from '../components/Buttom';

import cache from '../scripts/cache'
import login from '../scripts/api/login.js'
import signup from '../scripts/api/signup.js'

export default {
  name: 'login',
  components: {
    Buttom
  },
  data() {
    return {
      passwordLoginType: "password",
      passwordSignupType: "password"
    }
  },
  methods: {
    showLoginPassword() {
      this.passwordLoginType === "text" ? 
        this.passwordLoginType = "password" : 
        this.passwordLoginType = "text"
    },
    showSignupPassword() {
      this.passwordSignupType === "text" ? 
        this.passwordSignupType = "password" : 
        this.passwordSignupType = "text"
    },
    async loginUser() {
      let email = document.getElementById("email-login").value.replace(this.$store.state.regexWhiteSpace, "")
      let password = document.getElementById("password-login").value.replace(this.$store.state.regexWhiteSpace, "")
      let isEmailValid = (email === "" || !this.$store.state.regexEmail.exec(email))
      let isPasswordValid = (password === "" || this.$store.state.regexNotSqlInjection.exec(password))

      if(isEmailValid || isPasswordValid) {
        this.$store.commit("logginFailed")
        return
      }

      let response;
      try {
        response = await login(email, password)
        this.$store.commit("storeToken", response.data.accessToken)
        this.$store.commit("logginSuccess")
        this.$router.push({name: 'profile'})
      }
      catch(err) {
        this.$store.commit("logginFailed")
      }
    },
    async signupUser() {
      let email = document.getElementById("email-signup").value.replace(this.$store.state.regexWhiteSpace, "")
      let password = document.getElementById("password-signup-input").value.replace(this.$store.state.regexWhiteSpace, "")
      let passwordConfirmation = document.getElementById("password-confirmation-signup-input").value.replace(this.$store.state.regexWhiteSpace, "")

      let isEmailValid = (email === "" || !this.$store.state.regexEmail.exec(email))
      let passwordWithSqlInjection = this.$store.state.regexNotSqlInjection.exec(password)
      let passwordsNotEmpty = (password === "" || passwordConfirmation === "")
      let isSignupInvalid = isEmailValid || (passwordWithSqlInjection && passwordsNotEmpty)

      if(isSignupInvalid) {
        this.$store.commit("signupFailed")
        return 
      }

      try {
        let response = await signup(email, password)
      }
      catch(err) {
        this.$store.commit("signupFailed")
      }
    }
  },
  async created() {
    if(this.$store.state.accessToken !== "") {
      this.$route.push({name: "profile"})
    }
  }
}
</script>
