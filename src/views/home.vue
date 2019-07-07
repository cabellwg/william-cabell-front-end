<template>
  <main class="home">
    <!-- <h2 class="home__title">William Cabell</h2> -->

    <home-quote />

    <block-footer />
  </main>
</template>

<script>
import HomeQuote from "../components/home-quote.vue";
import BlockFooter from "../components/block-footer.vue";

export default {
  components: {
    HomeQuote,
    BlockFooter
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.home
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center

  height: 100vh

  text-align: center

  @include media("<tablet")
    margin-left: 3rem

  &__title
    margin-top: 3%
    padding-top: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
</style>
