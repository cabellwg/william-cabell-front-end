<template>
  <div class="resume">

  <section class="intro resume--light">
    <h2 class="intro__heading">William Cabell</h2>
    <p class="resume__text">I'm a curious, goal-oriented, hard-working mathematics major at Virginia Tech interested in mathematics research and software development. I'm a self-taught full-stack web developer, an enthusiastic mathematician, and a massive data nerd. In my free time, you can find me programming, playing music, playing with electronics, reading textbooks, Wikipedia, or lengthy online thinkpieces, listening to podcasts, cooking, running, swimming, cycling, or sailing.
    </p>
  </section>

  <section class="skills resume--dark">
    <h1 class="resume__section-heading">Skills</h1>
    <hr />

    <resume-list v-bind="skills.mathematics" />
    <resume-list v-bind="skills.development" />
    <resume-list v-bind="skills.communication" />
    <resume-list v-bind="skills.engineering" />

  </section>

  <section class="experience resume--light">
    <h1 class="resume__section-heading">Experience</h1>
    <hr />

    <resume-list v-bind="experience.industry" />
    <resume-list v-bind="experience.freelance" />
  </section>

  <section class="education resume--dark">
    <h1 class="resume__section-heading">Education</h1>
    <hr />

    <resume-list v-bind="education.undergraduate" />
    <resume-list v-bind="education.highSchool" />
  </section>

  <block-footer class="block-footer--uncentered" />
  </div>
</template>

<script>
import BlockFooter from "../components/block-footer.vue";
import ResumeList from "../components/resume-list.vue";
import ResumeRepository from "../models/resume-repository.js";

export default {
  components: {
    BlockFooter,
    ResumeList
  },
  data: function() {
    return {
      skills: ResumeRepository.skills,
      experience: ResumeRepository.experience,
      education: ResumeRepository.education
    };
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.resume
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
    margin-left: 3rem
    padding: 15vh 5vh

    hr
      width: 20vw
      max-width: 150px
      height: 3px
      margin: 0.5rem 1rem
      margin-bottom: 0
      border: none

  &__section-heading
    font-size: 2.5rem
    font-style: italic

  &__subheading
    font-size: 1.5rem
    font-weight: 500

  &__text
    font-weight: 300
    max-width: 768px

.intro
  &__heading
    font-size: 1.7rem
    font-style: italic

.block-footer--uncentered
  @include media("<tablet")
    margin-left: 3rem

</style>
