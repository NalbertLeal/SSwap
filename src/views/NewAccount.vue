<template lang="pug">
  #login
    .login-box
      h2 Iniciar sessão
      form
        input(id="email-password-input" :placeholder="plaeholder" type="text" maxlength="50")
        .create-account
          p não possui conta? 
          router-link(class="create-account-link" to="/new-account") Crie uma
        Buttom(classes="buttom-submit" value="ENTRAR")
      img
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#login {
  align-items: center;
  // background: $color-purple;
  background: $color-purple;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5.8rem);
  justify-content: center;
  margin-top: 5.8rem;

  > .login-box {
    background: $color-purple-light;
    box-shadow: 0px 0px 10px #000;
    box-sizing: border-box;
    height: 15rem;
    padding: 0px 3rem;
    position: relative;
    width: 32rem;

    > h2 {
      color: #fff;
      text-align: start;
    }

    > form {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      height: 8rem;
      justify-content: space-around;

      > #email-password-input {
        border-radius: 0.5rem;
        font-size: 1.1rem;
        height: 1.8rem;
        padding: 0rem 0.5rem;
        outline: none;
      }

      > .create-account {
        display: flex;

        > p {
          margin: 0rem;
          margin-right: 1rem;
        }

        > a {
          color: #fff;
          cursor: pointer;
          text-decoration: none;

          &:hover {
            color: $color-orange;
          }
        }
      }

      > .buttom-submit {
        // align-self: flex-end;
        height: 1.5rem;
        padding: 0.2rem 1rem;
        width: auto;
      }
    }

    > img {
      background: url("../assets/imgs/SSWAP-default-logo.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 7rem;
      position: absolute;    
      right: 3rem;
      top: 4rem;
      width: 7rem;
    }
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Buttom from '../components/Buttom';

export default {
  name: 'login',
  components: {
    Buttom
  },
  data() {
    return {
      email: "",
      password: "",
      placeholder: "email",
    }
  },
  methods: {
    clickSubmit() {
      if(this.email !== "" || this.password === "") {

      }
    }
  }
}
</script>
