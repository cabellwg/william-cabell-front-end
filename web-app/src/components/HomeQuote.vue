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
        "From time to time, the tree of liberty must be watered with the blood of tyrants and patriots.",
      source: "Thomas Jefferson"
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
    text-align: center

    &::before
      content: "“"

    &::after
      content: "”"

  &__source
    text-align: center

    &::before
      content: "– "

</style>
