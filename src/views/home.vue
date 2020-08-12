<template>
  <main class="home">
    <home-quote class="home__quote" />
    <block-footer class="home__footer" />
  </main>
</template>

<script>
import HomeQuote from "../components/home-quote.vue";
import BlockFooter from "../components/block-footer.vue";

export default {
  components: {
    HomeQuote,
    BlockFooter,
  },
  metaInfo: function () {
    return {
      title: "Home",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "You’re still here? It’s over! Go home! Go! (But click here first to see my cool website!)",
        },
      ],
    };
  },
};
</script>

<style lang="sass">
@import "../styles/variables"

.home
  height: 100vh
  text-align: center

  @include media(">=tablet")
    margin-left: 2.5rem

  &__title
    margin-top: 3%
    padding-top: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem

  &__quote
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &__footer
    position: absolute
    bottom: 2rem
    left: 50%
    transform: translate(-50%, 0)
</style>
