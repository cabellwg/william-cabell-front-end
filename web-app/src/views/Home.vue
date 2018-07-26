<template>
  <main class="home">
    <h2 class="home__title">William Cabell</h2>

    <home-quote />

    <home-footer :show-themes.sync="showThemes" />

    <themes-modal v-if="showThemes" :show-themes.sync="showThemes" />
  </main>
</template>

<script>
import HomeQuote from "../components/home-quote.vue";
import HomeFooter from "../components/home-footer.vue";
import ThemesModal from "../components/themes-modal.vue";

export default {
  components: {
    HomeQuote,
    HomeFooter,
    ThemesModal
  },
  data: function() {
    return {
      showThemes: false
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

  @include media("<tablet")
    margin-left: 3rem

  &__title
    margin-top: 0
    padding-top: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem

</style>
