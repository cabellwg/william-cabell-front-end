<template>
  <div class="info-page">
    <section class="intro">
      <slot name="intro"></slot>
    </section>

    <section class="info-page__section" v-for="index of numberOfFields" :key="index" ref="sections">
      <slot :name="index"></slot>
    </section>

    <block-footer class="block-footer--uncentered" />
  </div>
</template>

<script>
import BlockFooter from "../components/block-footer.vue";

export default {
  components: {
    BlockFooter
  },
  props: ["numberOfFields"],
  mounted: function() {
    this.$refs.sections.forEach((section, index) => {
      if (index % 2 == 0) {
        section.classList.add("info-page--dark");
      } else {
        section.classList.add("info-page--light");
      }
    });
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.info-page
  &--dark
    background-color: $black
    color: $bg-color

    hr
      background-color: $bg-color

  &--light
    background-color: $bg-color
    color: $text-color

    hr
      background-color: $text-color

  section
    padding: 15vh 5vh

    hr
      width: 20vw
      max-width: 150px
      height: 3px
      margin: 0.5rem 1rem
      margin-bottom: 0
      border: none

.intro
  &__heading
    font-size: 1.7rem
    font-style: italic

.block-footer--uncentered
  @include media("<tablet")
    margin-left: 3rem
</style>
