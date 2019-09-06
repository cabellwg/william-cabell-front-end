<template>
  <page>
    <main slot="main" class="page__content">
      <h1 class="about__title">About</h1>

      <p class="about__text">
        I'm a curious, goal-oriented, hard-working mathematics major and
        computer science minor at Virginia Tech. I have experience with DevOps,
        developing full-stack web applications, evaluating application security,
        and leading medium-sized dev teams.
      </p>

      <p class="about__text"></p>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";

export default {
  components: {
    Page
  },
  metaInfo: function() {
    return {
      title: "About",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content: ""
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.about
  &__title
    margin-top: 0
    margin-bottom: 3rem

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
    color: $text-color

    text-align: center

  &__text
    font-weight: 300
    color: $text-color

    &--link
      color: inherit
      font-style: italic
      font-weight: 600
      text-decoration: underline
      cursor: pointer

      &:hover
        color: $mid-grey
</style>
