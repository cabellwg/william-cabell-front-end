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

#back-button
  fill: none
  stroke: $text-color
  stroke-width: 15

.article
  &__title
    margin-top: 0
    margin-bottom: 2rem
    font-size: 2rem
    font-style: italic
    font-weight: 800
    color: $text-color

  &__metadata
    margin-top: 0
    margin-bottom: 10rem
    font-size: 0.75rem
    font-style: italic
    font-weight: 300
    color: $mid-grey

    &--divider
      font-style: normal

  &__body
    margin: 2rem 0
    line-height: 1.4
    font-weight: 300
    color: $text-color

    em
      font-style: italic

    &--link
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
      user-select: none

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
    margin-bottom: 2rem
    padding-top: 2rem

    font-style: italic
    font-size: 1.7rem
    font-weight: 600

  &__subsubheading
    margin-top: 2rem
    margin-bottom: 2rem

    font-style: italic
    font-size: 1.2rem
    font-weight: 800
    color: $dark-grey

  &__caption
    display: block
    width: 85%
    margin: 0.5rem 10% 2rem 5%
    text-align: left
    color: $mid-grey
    font-size: 0.75rem
    font-weight: 300

    &--link
      display: inline
      color: inherit
      font-style: italic
      text-decoration: underline
      cursor: pointer

  section:nth-last-of-type(2)::after
    content: "□"
    display: block
    margin: -1rem 0
    text-align: right
    width: 100%
    color: $text-color
    font-size: 1.25rem

  &__info
    margin: 2rem 0
    line-height: 1.4
    font-weight: 300
    font-style: italic
    color: $dark-grey

    &-container
      margin: 13rem 0 -10rem

  &__table
    width: 100%
    padding: 1rem 2rem
    box-sizing: border-box
    border-collapse: separate
    border-spacing: 0

    font-weight: 300
    font-style: italic
    color: $text-color

    background-color: $really-light-grey

    &--scrunch
      padding: 1rem 1rem
      font-size: 0.9rem

    &-container
      width: 85%
      margin: 2rem 10% 2rem 5%
      overflow-x: auto

      @include media("<tablet")
        width: 95%
        margin: 2rem 2.5%

      &--with-caption
        margin: 2rem 10% 0 5%

        @include media("<tablet")
          margin: 2rem 2.5% 0 2.5%

    &-heading
      padding: 0.5rem 1rem
      box-sizing: border-box
      border-bottom: 3px solid $text-color
      text-align: left

      font-weight: 300
      font-style: italic
      color: $text-color

      &--scrunch
        width: 1rem
        padding: 0.5rem 0.1rem

    &-data
      padding: 0.5rem 1rem
      box-sizing: border-box
      text-align: left

      &--50
        width: 50%

      &--scrunch
        padding: 0.5rem 0.1rem
        width: 1rem

.fade
  &-enter-active
    transition: opacity .5s

  &-leave-active
    transition: opacity .2s

  &-enter
    opacity: 0

  &-leave-to
    opacity: 0
</style>
