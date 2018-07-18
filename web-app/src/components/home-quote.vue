<template>
  <figure class="home-quote">
    <blockquote class="home-quote__text">
      {{ quote }}
    </blockquote>
    <figcaption class="home-quote__source">{{ source }}</figcaption>
  </figure>

</template>

<script>
export default {
  data() {
    return {
      quote:
        "Write your code as if the person who will end up maintaining it is a violent psychopath with your home address.",
      source: "Reddit"
    };
  }
};
</script>

<style lang="sass">

.home-quote
  width: 15rem
  margin: 0

  &__text
    margin: 0

    &::before
      content: "“"

    &::after
      content: "”"

  &__source

    &::before
      content: "– "

</style>
