<template>
  <page>
    <main slot="main" class="page__content">
      <h1 class="about__title">About</h1>

      <p class="about__text">
        If you have any questions for me, feel free to
        <a class="about__text--link" @click="$router.push('/contact')">ask</a>!
      </p>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";
import splittingLemmaPaper from "../assets/Splitting_Lemma_Research_20180502.pdf";

export default {
  components: {
    Page,
  },
  metaInfo: function () {
    return {
      title: "About",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
    };
  },
  data: function () {
    return {
      splittingLemmaPaper,
    };
  },
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
    line-height: 1.4
    color: $text-color

    &--link
      color: inherit
      font-style: italic
      font-weight: 600
      text-decoration: underline
      cursor: pointer

      &:hover
        color: $mid-grey

  &__resume-button
    display: block
    box-sizing: border-box

    width: 40%
    margin: 5rem auto
    border: 1px solid $text-color
    padding: 1rem

    background-color: $black

    text-align: center
    text-decoration: none
    color: $bg-color

    transition: "background-color" .1s
    transition: color .1s
    &:hover
      background-color: $bg-color
      color: $text-color
      transition: "background-color" .1s
      transition: color .1s

    &[disabled]
      background-color: $bg-color
      color: $text-color
      cursor: default
</style>
