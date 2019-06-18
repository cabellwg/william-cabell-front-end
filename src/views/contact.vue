<template>
  <div class="contact">
    <h1 class="contact__header">Contact</h1>

    <p class="contact__text">You can email me at <a href="mailto:william16180@gmail.com" class="contact__text--link">
      william16180@gmail.com
    </a> or fill out this handy form, and I'll get back to you as soon as I can!</p>

    <hr />

    <contact-form />

    <block-footer />
  </div>
</template>

<script>
import BlockFooter from "../components/block-footer.vue";
import ContactForm from "../components/contact-form.vue";

export default {
  components: {
    BlockFooter,
    ContactForm
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.contact
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center

  min-height: 100vh

  text-align: center

  hr
    width: 20vw
    max-width: 150px
    height: 3px
    margin: 3vh 1rem
    border: none

    background-color: $text-color

  @include media("<tablet")
    margin-left: 3rem

  &__header
    margin-top: 0
    padding-top: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem

  &__text
    max-width: 15rem
    width: 90%

    text-align: left
    font-weight: 300

    &--link
      font-weight: 600
      text-decoration: underline
      font-style: italic
      color: inherit

      &:hover
        color: $mid-grey

  &-form
    flex-grow: 2

    max-width: 15rem
    width: 90%

</style>
