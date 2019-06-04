<template lang="pug">
  .elementinput
    input(id="search-input" type="text" :maxlength="maxSize")
    font-awesome-icon(class='icon-search' :icon=['fas', 'search'] @click="")
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.elementinput {
  background: transparent;
  display: flex;
  position: relative;

  #search-input {
    background: white;
    border: none;
    border: 2px solid white;
    border-radius: 2rem;
    font-size: 18px;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 2rem;
    outline: none;
    width: 100%;
  }

  .icon-search {
    color: $color-green;
    cursor: pointer;
    height: 100%;
    left: 0px;
    margin-left: calc(100% - 27px);
    position: absolute;

    &:hover {
      color: $color-orange;
    }
  }
}
</style>

<script>
  export default {
    props: {
      maxSize: { type: Number, required: false, defaut: "100"}
    }
  }
</script>
