<template>
  <figure class="home-quote">
    <blockquote class="home-quote__text">
      {{ `“${quote.text}”` }}
    </blockquote>
    <a :href="quote.link" target="_blank" class="home-quote__source">{{ quote.source || "Anonymous" }}</a>
  </figure>

</template>

<script>
import QuoteRepository from "../models/quote-repository";

export default {
  data() {
    return {
      quote: QuoteRepository.getRandomQuote()
    };
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.home-quote
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  margin: 0
  margin-top: 30vh

  &__text
    width: 12rem
    margin: 0
    margin-bottom: 1vh

    line-height: 1.2
    text-align: left
    font-weight: 300

  &__source
    width: 12rem

    text-align: right
    color: $text-color
    font-style: italic
    font-weight: 600
    letter-spacing: -0.03rem
    text-decoration: none

    &::before
      content: "– "
</style>
