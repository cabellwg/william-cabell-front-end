<template>
  <footer class="block-footer__footer">
    <div class="block-footer__logos">
      <a href="https://www.linkedin.com/in/william-cabell-16180/" target="_blank">
        <img class="block-footer__logo --lighten" src="../assets/linkedin-logo.png" alt="Go to my LinkedIn" />
      </a>
      <a href="https://gitlab.com/cabellwg" target="_blank">
        <img class="block-footer__logo" src="../assets/gitlab-logo.svg" alt="Go to my Gitlab" />
      </a>
    </div>
    <caption class="block-footer__bottom-text">
      <i class="block-footer__bottom-text--interactable" @click="showThemes = !showThemes">Themes</i>
      <span class="block-footer__bottom-text-divider">|</span>
      <i>v0.0.1</i>
    </caption>

    <themes-modal :show-themes.sync="showThemes" />
  </footer>
</template>

<script>
import ThemesModal from "./themes-modal.vue";

export default {
  components: {
    ThemesModal
  },
  data: function() {
    return {
      showThemes: false
    };
  }
};
</script>


<style lang="sass">
@import "../styles/variables"

.block-footer
  &__footer
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center

    overflow: hidden

    margin: 0 auto

  &__logos
    display: flex
    justify-content: center
    align-items: flex-end

  &__logo
    width: 2.5rem
    margin: 1rem 1.5rem

  &__bottom-text
    margin-bottom: 1rem

    text-align: center
    font-size: 0.8rem
    color: $mid-grey
    font-weight: 300
    text-decoration: none

    &--interactable
      cursor: pointer

      &:hover
        color: $text-color
        transition: .1s color

    &-divider
      margin-left: 0.75rem
      margin-right: 0.75rem
.--lighten
  opacity: 0.875

</style>
