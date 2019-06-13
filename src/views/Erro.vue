<template lang="pug">
  #erro
    .alert-position
      h1 Erro !!!
      p desculpe, algo de errado não está certo :(
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

#erro {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2rem);
  justify-content: center;
  margin-top: 5.8rem;

  > .alert-position {
    display: flex;
    flex-direction: column;

    > h2,
    > p  {
      color: $color-purple;
      margin: 0rem;
    }

    > h2 {
      font-size: 8rem;
    }

    > p {
      font-size: 3rem;
    }
  }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchInput from '../components/SearchInput';

import cache from '../scripts/cache'

export default {
  name: 'home',
  components: {
    SearchInput
  },
  data() {
    return {
      
    }
  },
  async mounted() {
    
  }
}
</script>
