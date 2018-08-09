<template>
  <div class="not-found">
    <h1 class="not-found__heading">Ceci est une page.</h1>
    <p class="not-found__text">Desolé, c'est impossible de trouver cette page. Mais vous l'avez lue correctement. La trahison de l'Internet est que n'importe quoi est une page, alors il ne faut pas que vous vous perdiez dans le surréalisme. Mais j'éspere que vous pouvez comprendre le français.</p>
  </div>
</template>

<style lang="sass">
@import "../styles/variables"

.not-found
  @include media("<tablet")
    margin-left: 3rem

  &__heading
    margin-top: 0
    padding-top: 25vh
    padding-left: 2rem
    padding-right: 2rem

    font-size: 3rem
    font-style: italic
    font-weight: 800
    text-align: center

    @include media("<tablet")
      padding-top: 7.5vh

  &__text
    box-sizing: border-box
    width: 100%
    max-width: 512px
    padding: 2rem
    margin: 0 auto

    font-style: italic
    font-weight: 300
    text-align: justify

    @include media("<tablet")
      text-align: left

</style>
