<template>
  <info-page :number-of-fields="3">

  <section slot="intro">
    <h2 class="intro__heading">Résumé</h2>
    <p class="resume__text">I'm a curious, goal-oriented, hard-working mathematics major at Virginia Tech interested in mathematics research and software development. I'm a self-taught full-stack web developer, an enthusiastic mathematician, and a massive data nerd. In my free time, you can find me programming, playing music, playing with electronics, reading textbooks, Wikipedia, or lengthy online thinkpieces, listening to podcasts, cooking, running, swimming, cycling, or sailing.
    </p>
  </section>

  <section slot="1">
    <h1 class="resume__section-heading">Skills</h1>
    <hr />

    <resume-list v-bind="skills.mathematics" />
    <resume-list v-bind="skills.development" />
    <resume-list v-bind="skills.communication" />
    <resume-list v-bind="skills.engineering" />

  </section>

  <section slot="2">
    <h1 class="resume__section-heading">Experience</h1>
    <hr />

    <resume-list v-bind="experience.industry" />
    <resume-list v-bind="experience.freelance" />
  </section>

  <section slot="3">
    <h1 class="resume__section-heading">Education</h1>
    <hr />

    <resume-list v-bind="education.undergraduate" />
    <resume-list v-bind="education.highSchool" />
  </section>

  </info-page>
</template>

<script>
import InfoPage from "../components/info-page.vue";
import ResumeList from "../components/resume-list.vue";
import ResumeRepository from "../models/resume-repository.js";

export default {
  components: {
    InfoPage,
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
.resume
  &__section-heading
    font-size: 2.5rem
    font-style: italic

  &__subheading
    font-size: 1.5rem
    font-weight: 500

  &__text
    font-weight: 300
    max-width: 768px
</style>
