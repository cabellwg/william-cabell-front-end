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
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  margin: 0
  margin-top: 30vh

  &__text
    width: 10.6rem
    margin: 0
    margin-bottom: 1vh

    line-height: 1.2
    text-align: justify
    font-weight: 300

    &::before
      content: "“"

    &::after
      content: "”"

  &__source
    width: 10.5rem

    text-align: right
    font-style: italic
    font-weight: 600

    &::before
      content: "– "
</style>
