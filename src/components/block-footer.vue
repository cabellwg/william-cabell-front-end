<template>
  <footer class="block-footer__footer">
    <div class="block-footer__logos">
      <a
        href="https://www.linkedin.com/in/william-cabell-16180/"
        target="_blank"
      >
        <img
          class="block-footer__logo --lighten"
          src="../assets/linkedin-logo.png"
          alt="Go to my LinkedIn"
        />
      </a>
      <a href="https://github.com/cabellwg" target="_blank">
        <img
          class="block-footer__logo"
          src="../assets/github-logo.png"
          alt="Go to my Github"
        />
      </a>
    </div>
    <a
      href="https://github.com/cabellwg/williamcabell/releases"
      target="_blank"
      class="block-footer__bottom-text block-footer__bottom-text--interactable"
    >
      <i class="block-footer__version">{{ version || "v" }}</i>
    </a>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      showThemes: false,
      version: "",
    };
  },
  mounted: function () {
    axios
      .get(
        "https://api.github.com/repos/cabellwg/william-cabell-front-end/releases/latest"
      )
      .then((response) => {
        this.version = response.data.tag_name;
      });
  },
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

    margin: 2rem auto 0

  &__logos
    display: flex
    justify-content: center
    align-items: flex-end

    a::after
      display: none

  &__logo
    width: 1.75rem
    margin: 1rem 0.75rem

  &__bottom-text
    margin-bottom: 1rem

    text-align: center
    font-size: 0.6rem
    color: $mid-grey
    font-weight: 300
    text-decoration: none

    &--interactable
      cursor: pointer

      transition: .1s color
      &:hover
        color: $text-color
        transition: .1s color

    &-divider
      margin-left: 0.75rem
      margin-right: 0.75rem
.--lighten
  opacity: 0.875
</style>
