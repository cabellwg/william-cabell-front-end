<template>
  <div class="modal">
    <button class="modal__x" @click="$emit('update:showThemes', !showThemes)">
      &times;
    </button>
    <div class="modal__container">
      <h3>Pick a theme</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showThemes: Boolean
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.modal
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0

  display: flex
  justify-content: center
  align-items: center

  background-color: #222222aa

  &__x
    display: block
    position: absolute
    top: 5vw
    right: 5vw

    width: 5rem
    height: 5rem
    margin: 0
    padding: 0

    cursor: pointer

    font-size: 5rem
    font-weight: 200
    line-height: 1
    color: $bg-color

  &__container
    padding: 5%

    background-color: $bg-color

</style>
