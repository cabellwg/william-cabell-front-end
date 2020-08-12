<template>
  <figure class="home-quote">
    <blockquote class="home-quote__text">
      &ldquo;<span v-html="quote.text"></span>&rdquo;
    </blockquote>
    <a :href="quote.link" target="_blank" class="home-quote__source">
      <span v-html="quote.source || 'Anonymous'"></span>
    </a>
  </figure>
</template>

<script>
import QuoteRepository from "../models/quote-repository";

export default {
  data() {
    return {
      quote: QuoteRepository.getRandomQuote(),
    };
  },
};
</script>

<style lang="sass">
@import "../styles/variables"

.home-quote
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  flex-grow: 3
  margin: 0

  &__text
    width: 20rem
    max-width: 70%
    margin: 0
    margin-bottom: 3vh

    line-height: 1.2
    text-align: center
    font-weight: 300
    font-size: 1rem

  &__source
    width: 12rem

    text-align: center
    color: $light-grey
    font-style: italic
    font-size: 0.75rem
    font-weight: 300
    letter-spacing: -0.03rem
    text-decoration: none

    &::before
      content: "— "
</style>
