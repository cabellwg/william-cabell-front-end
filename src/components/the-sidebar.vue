<template>
  <div>
    <div id="menuToggle" class="toggle__container" @click="toggleMenu">
      <hamburger class="toggle__icon" />
    </div>
    <div id="nav" class="nav">
      <router-link class="nav__item" to="/">
        <label>Home</label>
      </router-link>
      <router-link class="nav__item" to="/about">
        <label>About</label>
      </router-link>
      <router-link class="nav__item" to="/blog">
        <label>Blog</label>
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

      document
        .getElementById("menuToggle")
        .classList.toggle("toggle__container--open");
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
  width: $sidebar-width

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
    position: fixed
    bottom: 0
    left: 0

    background-color: #fefefe
    box-shadow: 0 0 5px $light-grey

    border-right: 1px solid $text-color
    border-top: 1px solid $text-color

    transition: left 0.2s ease-in-out

    @include media(">=tablet")
      display: none

    &--open
      left: $sidebar-width

  &__icon
    width: 52px
    height: 52px

    padding: 12px

    cursor: pointer
</style>
