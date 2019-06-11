<template lang="pug">
  #offer
    .object-offer
      .object-name
        h2 {{objetName}}
        p {{category}} > {{subcategory}}
      .object
        .img-description
          .img-center
            img
          .decription {{description}}
          .buttom-position
            Buttom(classes="buttom-offer" value="FAZER OFERTA" :clickEvent="abrirModalFazerOferta")
        .info
          .labels
            ._1 STATUS:
            ._2 VALOR:
            ._3 QUANTIDADE:
            ._4 OFERTADO:
            ._5 OFERTADO POR:
          .values
            ._1 {{status}}
            ._2 {{estimatedValue}}
            ._3 {{quantity}}
            ._4 {{offerData}}
            ._5 {{owner}}
    .users-messagers-for-product
      .message(v-for="msg in mesages")
        .line
        p {{msg.text}}
        p by: {{msg.author}}
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#offer {
  align-items: center;
  // background: $color-purple;
  background: #fff;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 5.8rem);
  // justify-content: center;
  margin-top: 5.8rem;
  padding: 2rem 3rem;

  .object-offer {
    height: 48rem;

    .object-name {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      width: 100%;

      > h2 {
        font-size: 3rem;
        margin-top: 0px;
        margin-bottom: 0.8rem;
      }

      > p {
        margin-top: 0px;
      }
    }

    .object {
      display: flex;
      height: 15rem;
      justify-content: space-between;
      width: 100%;

      > .img-description {
        background: $color-purple;
        height: 32rem;
        padding: 2rem;
        width: 45%;

        .img-center {
          display: flex;
          justify-content: center;
          width: 100%;

          > img {
            height: 20rem;
            margin: 0rem auto;
            margin-bottom: 2rem;
            width: 20rem;
          }
        }

        > .decription {
          color: #fff;
          margin-bottom: 1rem;
        }

        > .buttom-position {  
          display: flex;
          justify-content: center;
          width: 100%;

          > .buttom {
            width: 8rem;
          }
        }
      }

      > .info {
        background: $color-orange;
        color: #fff;
        display: flex;
        font-size: 1.1rem;
        padding: 1rem;
        width: 30%;

        > .labels {
          display: flex;
          flex-direction: column;
          margin-right: 1rem;

          > * {
            margin-top: 0.5rem;
          }
        }

        > .values {
          display: flex;
          flex-direction: column;
          
          > * {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }

  > .users-messagers-for-product {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    > .message {
      width: 60%;

      > .line {
        border-top: 0.05rem solid #aaa;
        height: 0.1rem;
        width: 100%;
      }
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
      objetName: "Iphone",
      category: "celular",
      subcategory: "apple",
      status: "displonivel",
      isFree: false,
      estimatedValue: 2000,
      quantity: 1,
      offerData: "08/06/2019, 23:09:18",
      owner: "Nalbert Gabriel Melo Leal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mesages: [
        {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales, massa sit amet luctus molests sit amet dui aliquam viverra. Etiam eu auctor massa. Nulla facilisi. Suspendisse nulla ipsum, maximus vitae sapien ac, dapibus cursus massa. Maecenas viverra dapibus urna, sed blandit velit. Suspendisse a ex pellentesque, l", author: "Jose"}, 
        {text: ", sed elementum urna tempus at. Aenean egestas feugiat nisi, sed aliquam elit tristique ac. Integer imperdiet eros nisi, ut rutrum diam ullamcorper eu. Quisque neque erat, commodo at facilisis a, consectetur quis lacus. Phasellus ultrices turpis quis elit sodales consectetur. Mauris vu", author: "Jose"},
        {text: "asasasasdasasasasdasasasasd", author: "Jose"},
        {text: "asasaslas,dlçasmlmsaldmçlsadasdasasasasdasasasasd", author: "Jose"},
        {text: "asasasasda  sas sasas dgggga fsweew asasasd", author: "Jose"},
        {text: "asasasasdalasclasclçsa,sasasasdasasasasd", author: "Jose"},
        {text: ", sed elementum urna tempus at. Aenean egestas feugiat nisi, sed aliquam elit tristique ac. Integer imperdiet eros nisi, ut rutrum diam ullamcorper eu. Quisque neque erat, commodo at facilisis a, con", author: "Jose"},]
    }
  },
  methods: {
    abrirModalFazerOferta() {

    },
    modalPassword() {

    },
    getOferOwner() {

    },
    getOffer() {
      let offerId = this.$route.params.offerid
    }
  },
  async created() {
    if(!this.$store.state.loggedIn || !this.$store.state.loginToken === "") {
      this.$router.push({name: 'login'});
      return
    }

    this.getOffer()
  }
}
</script>
