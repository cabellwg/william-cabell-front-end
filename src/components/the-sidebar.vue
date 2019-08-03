<template>
  <div>
    <div class="toggle__container" @click="toggleMenu">
      <hamburger class="toggle__icon" />
    </div>
    <div id="nav" class="nav">
      <router-link class="nav__item" to="/">
        <label>Home</label>
      </router-link>
      <router-link class="nav__item" to="/projects">
        <label>Projects</label>
      </router-link>
      <router-link class="nav__item" to="/resume">
        <label>Résumé</label>
      </router-link>
      <router-link class="nav__item" to="/contact">
        <label>Contact</label>
      </router-link>
    </div>
  </div>
</template>

<script>
import Hamburger from "./hamburger.vue";

export default {
  components: {
    Hamburger
  },
  methods: {
    toggleMenu: function() {
      this.$parent.$emit("toggleMenu", {});
    }
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.nav
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center

  height: 100vh
  width: 2.5rem

  @include media("<tablet")
    box-shadow: 0 0 5px $light-grey

  &__item
    display: flex
    flex-grow: 1
    flex-direction: column
    justify-content: center

    height: 3rem
    width: 100%
    margin: 0

    font-size: 1.15rem
    color: $bg-color
    text-decoration: none
    font-weight: 300
    font-style: italic
    letter-spacing: -0.03rem

    label
      display: block
      transform: rotate(90deg)

      width: 150%
      margin: 0
      margin-left: -22%

      cursor: pointer

      text-align: center

    &:nth-child(1)
      background-color: $light-grey

    &:nth-child(2)
      background-color: $mid-grey

    &:nth-child(3)
      background-color: $dark-grey

    &:nth-child(4)
      background-color: $black

    transition: "background-color" .1s
    transition: color .1s
    &:hover
      background-color: $bg-color
      color: $text-color
      transition: "background-color" .1s
      transition: color .1s

.toggle
  &__container
    float: right

    background-color: #fefefe
    box-shadow: 0 0 5px $light-grey

    border-right: 1px solid $text-color
    border-bottom: 1px solid $text-color

    @include media(">=tablet")
      display: none

  &__icon
    width: 60px
    height: 60px

    padding: 0.5rem

    cursor: pointer
</style>
