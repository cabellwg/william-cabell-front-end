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

    &:hover
      background-color: $bg-color
      color: $text-color
      transition: background-color .1s
      transition: color .1s

</style>
