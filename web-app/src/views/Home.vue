<template>
  <div class="home">
    <h2 class="home__title">William Cabell</h2>
    <home-quote />
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
</style>
