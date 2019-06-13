<template lang="pug">
  #profile
    .user-personal-area
      img(src="")
      .user-info
        .email Email: {{email}}
        .password(@click="modalPassword()") Password: ****
        .phone() Phone: {{phone}}
    .line-horizontal
      .line
    .offers
      .offers-column-1
        .offer(v-for="offer in offers")
          img(:src="offer.image")
          p {{offer.title}}
      .offers-column-2
        .offer(v-for="offer in offers")
          img(:src="offer.image")
          p {{offer.title}}
      .offers-column-3
        .offer(v-for="offer in offers")
          img(:src="offer.image")
          p {{offer.title}}
      .offers-column-4
        .offer(v-for="offer in offers")
          img(:src="offer.image")
          p {{offer.title}}
      
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#profile {
  align-items: center;
  // background: $color-purple;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5.8rem);
  // justify-content: center;
  margin-top: 5.8rem;
  padding: 2rem 0rem;

  .user-personal-area {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 10rem;
    // justify-content: space-between;
    padding: 0px 3rem;
    width: 100%;

    > img {
      height: 8rem;
      margin-right: 5rem;
      width: 8rem;
    }

    > .user-info {
      height: 7rem;
      width: 30rem;

      > .email {

      }

      > .password {

      }
    }
  }

  > .line-horizontal {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    height: 3rem;
    margin: 3rem 0rem; 
    padding: 0rem 3rem;
    width: 100%;

    > .line {
      border-bottom: 0.05rem solid $color-purple;
      height: 1rem;
      width: 100%;
    }
  }

  > .offers {
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 100vw;
    padding: 3rem 0rem;
    width: 100%;

    > .offers-column-1,
    > .offers-column-2,
    > .offers-column-3,
    > .offers-column-4 {
      align-items: space-between;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .offer {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 12rem;

      > img {
        height: 10rem;
        width: 10rem;
      }

      > p {
        text-align: center;
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

export default {
  name: 'login',
  components: {
    Buttom
  },
  data() {
    return {
      email: "",
      phone: "",
      offers: [{image: "https://img1.icarros.com/dbimg/imgnoticia/4/26086_1", title: "camaro laranja"},
        {image: "https://abrilquatrorodas.files.wordpress.com/2018/11/p90331098_highres_bmw-vision-inext-11-e1543429340433.jpg?quality=70&strip=info&strip=info", title: "carro futuristico"},
        {image: "https://fotos.jornaldocarro.estadao.com.br/uploads/2019/03/17092648/Novo-Prisma-e-Onix-2020-01-1160x724.jpg", title: "seminovo"},
        {image: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6.png?imwidth=1200", title: "seminovo 10.000km"},
        {image: "http://s2.glbimg.com/3PkX49n00P7VJmIwinYckG-Enp0=/smart/e.glbimg.com/og/ed/f/original/2017/09/14/sf4vx7u3s7rn8axvz5qoq7q3mohmxq1o_jlr_frankfurt_2017_021.jpg", title: "jaguar novinho"},
        {image: "https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556", title: "range rover"},
        {image: "https://img1.icarros.com/dbimg/imgnoticia/4/26086_1", title: "camaro doido"},
        {image: "https://abrilquatrorodas.files.wordpress.com/2018/11/p90331098_highres_bmw-vision-inext-11-e1543429340433.jpg?quality=70&strip=info&strip=info", title: "branco com rodão"},
        {image: "https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556", title: "troco carro seminovo"},
        {image: "https://abrilquatrorodas.files.wordpress.com/2018/11/p90331098_highres_bmw-vision-inext-11-e1543429340433.jpg?quality=70&strip=info&strip=info", title: "carro do ano"},
        {image: "https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556", title: "bora!!"},
        {image: "https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556", title: "só vem"},
        {image: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6.png?imwidth=1200", title: "borra trocar"},
        {image: "https://images.immedia.com.br//16/16460_2_EL.jpg?c=201807161556", title: "carrão"}]
    }
  },
  methods: {
    modalPassword() {

    }
  },
  async created() {
    if(this.$store.state.loggingFail || this.$store.state.loginToken === "") {
      this.$router.push({name: 'login'});
      return
    }
  }
}
</script>
