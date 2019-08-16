<template>
  <page>
    <main slot="main" class="page__content">
      <h1 class="about__title">About</h1>

      <p class="about__text">
        Beauty resides in abstraction. Not just the
        <a
          href="https://medium.com/@cancerian0684/what-are-four-basic-principles-of-object-oriented-programming-645af8b43727"
          target="_blank"
          class="about__text--link"
          >object-oriented programming principle</a
        >, but abstraction in the general sense. The
        <a
          href="https://en.wikipedia.org/wiki/Theory_of_forms"
          target="_blank"
          class="about__text--link"
          >Platonic form</a
        >
        of an object, idea, or experience holds beauty in its purest
        manifestation. I live my life chasing beautiful things.
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
