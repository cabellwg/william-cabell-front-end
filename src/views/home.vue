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
  },
  metaInfo: function() {
    return {
      title: "Home",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "You’re still here? It’s over! Go home! Go! (But click here first to see my cool website!)"
        }
      ]
    };
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

  &__title
    margin-top: 3%
    padding-top: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
</style>
