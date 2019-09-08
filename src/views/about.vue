<template>
  <page>
    <main slot="main" class="page__content">
      <h1 class="about__title">About</h1>

      <p class="about__text">
        I'm a curious, goal-oriented, hard-working mathematics major and
        computer science minor at Virginia Tech. I have experience with DevOps,
        developing full-stack web applications, evaluating application security,
        and leading medium-sized dev teams. I've done lots of interesting
        things:
      </p>

      <p class="about__text">
        In high school, I built a
        <a
          class="about__text--link"
          href="http://cabelldesignstudio.com"
          target="_blank"
          >website for my mom's interior design business</a
        >. If you stay on the page for long enough you can actually smell the
        noxious odors emanating from the JavaScript and PHP that I wrote as a
        junior in high school.
      </p>

      <p class="about__text">
        Freshman year of college, I did some
        <a class="about__text--link" :href="splittingLemmaPaper" target="_blank"
          >research in category theory</a
        >
        (that ended up being mostly about groups).
      </p>

      <p class="about__text">
        After freshman year, I had an internship at PIEtech, a small company in
        Powhatan, Virginia developing a SaaS application for financial advisors
        with over 50% market share called MoneyGuidePro. There, I worked with
        other interns to design
        <a
          class="about__text--link"
          href="https://github.com/cabellwg/monte-carlo"
          target="_blank"
          >stochastic models of the long-term performance of financial
          portfolios</a
        >, which they allowed us to open source at the end of the summer.
      </p>

      <p class="about__text">
        Last year, my mom decided to transition from interior design to
        painting, so she needed
        <a
          class="about__text--link"
          href="http://elizabethcabellfineart.com"
          target="_blank"
          >a new website</a
        >
        (which of course, I built for her from scratch).
      </p>

      <p class="about__text">
        During the 2018-2019 school year, I led the ECE subteam of Virginia
        Tech's SailBOT design team in rebuilding our codebase. Everyone on the
        team (I especially) learned valuable lessons about project management
        and software engineering best practices in the process. I wrote some
        data structures in C, some mathematical algorithms in Python, and some
        Bash and Make scripts to glue all of it together into a CI pipeline.
      </p>

      <p class="about__text">
        This past summer, I was a tech intern at Capital One. I worked on the
        Snowflake platform team, developing applications to support Capital
        One's enterprise integration with the Snowflake data warehouse platform.
        I worked with Python, SQL, Java, and JavaScript. I improved the runtime
        of several applications by a factor of 180 and found, reported, and
        developed a workaround for a serious security vulnerability in
        Snowflake. I also passed Capital One's internal Certified Secure
        Software Engineer exam.
      </p>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";
import splittingLemmaPaper from "../assets/Splitting_Lemma_Research_20180502.pdf";

export default {
  components: {
    Page
  },
  metaInfo: function() {
    return {
      title: "About",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content: ""
        }
      ]
    };
  },
  data: function() {
    return {
      splittingLemmaPaper
    };
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.about
  &__title
    margin-top: 0
    margin-bottom: 3rem

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
    color: $text-color

    text-align: center

  &__text
    font-weight: 300
    line-height: 1.4
    color: $text-color

    &--link
      color: inherit
      font-style: italic
      font-weight: 600
      text-decoration: underline
      cursor: pointer

      &:hover
        color: $mid-grey
</style>
