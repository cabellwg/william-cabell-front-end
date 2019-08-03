<template>
  <div class="info-page">
    <section class="intro">
      <slot name="intro-heading"></slot>
      <slot name="intro-text"></slot>
    </section>

    <section v-for="index of numberOfFields" :key="index" ref="sections">
      <slot :name="index"></slot>
    </section>
  </div>
</template>

<script>
export default {
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
    background-color: $really-light-grey
    color: $text-color
    border-color: $text-color

    hr
      background-color: $text-color

  &--light
    background-color: $bg-color
    color: $text-color
    border-color: $text-color

    hr
      background-color: $text-color

  > section
    padding: 7.5vh 5vh

    hr
      width: 20vw
      max-width: 150px
      height: 3px
      margin: 0.5rem 1rem
      margin-bottom: 0
      border: none

.intro
  h2
    font-size: 1.7rem
    font-style: italic
    max-width: 768px

  p
    font-weight: 300
    max-width: 768px
</style>
