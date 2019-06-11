<template lang="pug">
  .buttom(:class="classes" @click="clickEvent()") 
    p {{value}}
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.buttom {
  align-items: center;
  border: 0.2rem solid #fff;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  padding: 0rem 0.5rem;
  width: auto;

  &:hover {
    background: #fff;
    // box-shadow: 0.3rem 0.3rem 0.3rem #000;
          box-shadow: 0rem 0rem 0.5rem #000;
    color: $color-orange;
  }

  > p {
    display: inline-table;
    margin: 0px;
  }
}
</style>

<script>
import SearchInput from "./SearchInput.vue";

export default {
  props: {
    value: {type: String, required: true},
    clickEvent: {type: Function, required: false},
    classes: {type: String, required: false}
  }
}
</script>
