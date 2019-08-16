<template>
  <page>
    <main slot="main" class="page__content">
      <slot name="article" class="article"></slot>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";

export default {
  components: {
    Page
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.article
  &__title
    margin-top: 0
    margin-bottom: 1rem
    font-size: 2rem
    font-style: italic
    font-weight: 800
    color: $text-color

  &__metadata
    margin-bottom: 8rem
    font-size: 0.75rem
    font-style: italic
    font-weight: 300
    color: $mid-grey

    &--divider
      font-style: normal

  &__body
    line-height: 1.25
    font-weight: 300
    color: $text-color

    em
      font-style: italic

    &--link
      display: inline-block
      color: inherit
      font-style: italic
      font-weight: 600
      text-decoration: underline
      cursor: pointer

      &:hover
        color: $mid-grey

    &--footnote-link
      cursor: pointer
      text-decoration: underline
      font-style: italic
      font-weight: 600
      margin: 0 0.2rem

    &--footnote
      display: block
      width: 85%
      margin: 1rem 10% 1rem 5%
      padding: 1rem 2rem
      box-sizing: border-box

      font-weight: 300
      color: $dark-grey

      background-color: $really-light-grey

  &__subheading
    margin-top: 2rem

    font-style: italic
    font-size: 1.7rem
    font-weight: 600

  &__caption
    width: 85%
    margin: 0.5rem 10% 1rem 5%
    text-align: left
    color: $mid-grey
    font-size: 0.75rem
    font-weight: 300

    &--link
      color: inherit
      font-style: italic
      text-decoration: underline
      cursor: pointer

  &__table
    width: 85%
    margin: 2rem 10% 0 5%
    padding: 1rem
    box-sizing: border-box

    font-weight: 300
    font-style: italic
    color: $text-color

    background-color: $really-light-grey

    &-data--50
      width: 50%
      padding: 0.5rem 1rem
      box-sizing: border-box
</style>
