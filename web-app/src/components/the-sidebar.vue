<template>
  <div id="nav" class="nav">
    <router-link class="nav__item" to="/"><label>Home</label></router-link>
    <router-link class="nav__item" to="/portfolio"><label>Portfolio</label></router-link>
    <router-link class="nav__item" to="/resume"><label>Resumé</label></router-link>
    <router-link class="nav__item" to="/contact"><label>Contact</label></router-link>
  </div>
</template>

<style lang="sass">
@import "../styles/variables"

.nav
  float: left

  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center

  height: 100vh
  width: 3rem


  &__item
    display: flex
    flex-grow: 1
    flex-direction: column
    justify-content: center

    height: 2.5rem
    width: 100%
    margin: 0

    color: $bg-color
    text-decoration: none

    label
      display: block
      transform: rotate(90deg)

      margin: 0

      cursor: pointer

    &:nth-child(1)
      background-color: $light-grey

    &:nth-child(2)
      background-color: $mid-grey

    &:nth-child(3)
      background-color: $dark-grey

    &:nth-child(4)
      background-color: $black

</style>
