<template>
  <div class="not-found">
    <h1 class="not-found__heading">Ceci est une page.</h1>
    <p class="not-found__text">
      Desolé, il est impossible de trouver cette page. Mais vous êtes bien en
      train de lire une page, non? Le fait que n&rsquo;importe quoi soit une
      page est la trahison des internets. Soyez prudent, ne vous perdez pas dans
      le surréalisme. J&rsquo;espère que vous pouvez comprendre le français.
    </p>
  </div>
</template>

<script>
export default {
  metaInfo: function() {
    return {
      title: "One of Us Fucked up",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "If you send your Facebook password through the contact form on my website it automatically hides it, see ********"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.not-found
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
