<template>
  <footer class="home__footer">
    <div class="home__logos">
      <a href="https://www.linkedin.com/in/william-cabell-16180/" target="_blank">
        <img class="home__logo --lighten" src="../assets/linkedin-logo.png" alt="Go to my LinkedIn" />
      </a>
      <a href="https://gitlab.com/cabellwg" target="_blank">
        <img class="home__logo" src="../assets/gitlab-logo.svg" alt="Go to my Gitlab" />
      </a>
    </div>
    <caption class="home__bottom-text"><i>Themes</i>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i>v0.0.1 (Removed Herobrine)</i></caption>
  </footer>
</template>

<style lang="sass">
@import "../styles/variables"

.home
  &__footer
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center

    overflow: hidden

    margin: 0 auto

  &__logos
    display: flex
    justify-content: center
    align-items: flex-end

  &__logo
    width: 2.5rem
    margin: 1rem 1.5rem

  &__bottom-text
    margin-bottom: 1rem

    cursor: pointer

    text-align: center
    font-size: 0.8rem
    color: $mid-grey
    font-weight: 300
    text-decoration: none

    i:hover
      color: $text-color
      transition: .1s color

.--lighten
  opacity: 0.875
</style>
