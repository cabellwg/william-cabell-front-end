<template>
  <div class="home">
    <h2 class="home__title">William Cabell</h2>

    <home-quote />

    <div class="home__footer">
      <a href="https://www.linkedin.com/in/william-cabell-16180/" target="_blank">
        <img class="home__logo" src="../assets/linkedin-logo.png" alt="Go to my LinkedIn" />
      </a>
      <a href="https://gitlab.com/cabellwg" target="_blank">
        <img class="home__logo" src="../assets/gitlab-logo.svg" alt="Go to my Gitlab" />
      </a>
    </div>
  </div>
</template>

<script>
import HomeQuote from "../components/home-quote.vue";

export default {
  components: {
    HomeQuote
  }
};
</script>

<style lang="sass">
.home
  text-align: center

  &__title
    margin-top: 0
    padding-top: 5vh

    font-size: 1.63rem
    font-style: italic
    font-weight: 800

  &__footer
    position: absolute
    bottom: 0
    // Sidebar width
    left: 3rem
    right: 0

    display: flex
    justify-content: center
    align-items: flex-end

    margin: 0 auto
  &__logo
    width: 2.5rem
    margin: 1.5rem

</style>
