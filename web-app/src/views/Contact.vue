<template>
  <div class="contact">
    <h1 class="contact__header">Get in touch!</h1>

    <p class="contact__text">You can email me at <a href="mailto:william16180@gmail.com">
      william16180@gmail.com
    </a> or fill out this handy form, and I'll get back to you as soon as I can!</p>

    <form class="contact__form" method="post">

    </form>

    <block-footer />
  </div>
</template>

<script>
import BlockFooter from "../components/block-footer.vue";

export default {
  components: {
    BlockFooter
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

  height: 100vh

  text-align: center

  @include media("<tablet")
    margin-left: 3rem

  &__header
    font-style: italic

  &__text
    max-width: 15rem

    text-align: left

</style>
