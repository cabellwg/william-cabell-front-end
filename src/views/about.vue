<template>
  <page>
    <main slot="main" class="page__content">
      <h1 class="about__title">About</h1>

      <p class="about__text">
        I&rsquo;m a curious, goal-oriented, hard-working mathematics major and
        computer science minor at Virginia Tech. I have experience with DevOps,
        developing full-stack web applications, evaluating application security,
        and leading small to medium-sized dev teams.
      </p>

      <p class="about__text">
        In my free time, I do triathlons with the VT triathlon club (I&rsquo;m
        currently training for the Wilmington half Ironman), practice piano,
        race sailboats, play chess, cook, read, and learn new programming
        languages (the other day, I started writing a
        <a
          class="about__text--link"
          href="https://github.com/cabellwg/deeprust"
          target="_blank"
          >chess computer in Rust</a
        >! Look for blog articles about that in the future).
      </p>

      <a class="about__resume-button" :href="resume" target="_blank">
        View my resume
      </a>

      <p class="about__text">
        This past summer, before my third and final year at Virginia Tech, I was
        a data engineering intern at Capital One. I worked on the Snowflake
        platform team, developing applications to support Capital One&rsquo;s
        enterprise integration with
        <a
          class="about__text--link"
          href="https://www.snowflake.com"
          target="_blank"
          >Snowflake</a
        >. I worked with Bash, Python, SQL (SnowSQL), various AWS products,
        Flask, Node.js, and Spring Boot. I improved the runtime of several
        applications by a factor of up to 180 and found, reported, and developed
        a workaround for a serious security vulnerability in Snowflake. I also
        passed Capital One&rsquo;s internal Certified Secure Software Engineer
        exam, which focuses on identifying, exploiting, and patching
        <a
          class="about__text--link"
          href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project"
          target="_blank"
          >OWASP top ten</a
        >
        web application vulnerabilities.
      </p>

      <p class="about__text">
        My second year, I led the 14-person ECE subteam of Virginia Tech&rsquo;s
        SailBOT design team. Everyone on the team (I especially) learned
        valuable lessons about project management and software engineering best
        practices. I wrote some data structures in C, some mathematical
        algorithms in Python, and some Bash scripts to glue all of it together
        into a CI pipeline. Our efforts earned us second place at
        <a
          class="about__text--link"
          href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project"
          target="_blank"
          >our annual competition</a
        >.
      </p>

      <p class="about__text">
        After my first year, I had an internship at PIEtech, a small company in
        Powhatan, Virginia developing a SaaS suite for financial advisors called
        MoneyGuidePro. There, I worked with other interns to design
        <a
          class="about__text--link"
          href="https://github.com/cabellwg/monte-carlo"
          target="_blank"
          >stochastic models to create long-term forecasts for financial
          portfolios</a
        >, which they allowed us to open source at the end of the summer.
      </p>

      <p class="about__text">
        My first year, I did some
        <a class="about__text--link" :href="splittingLemmaPaper" target="_blank"
          >research in category theory</a
        >
        (that ended up being mostly about groups). I also scored a 9 on the
        Putnam mathematical competition, ranking 1,448 of 4,638 (just shy of the
        top third).
      </p>

      <p class="about__text">
        In high school, I built a
        <a
          class="about__text--link"
          href="http://cabelldesignstudio.com"
          target="_blank"
          >website for my mom&rsquo;s interior design business</a
        >. If you stay on the page for long enough you can actually smell the
        noxious odors emanating from the JavaScript and PHP that I wrote as a
        junior in high school. Don&rsquo;t Inspect Element. I warned you.
      </p>

      <p class="about__text">
        Last year, my mom decided to transition from interior design to
        painting, so obviously she needed
        <a
          class="about__text--link"
          href="http://elizabethcabellfineart.com"
          target="_blank"
          >a new website for that</a
        >
        (which I built with Vue, and am currently in the process of refactoring
        and improving).
      </p>

      <p class="about__text">
        If you have any questions for me, feel free to
        <a class="about__text--link" @click="$router.push('/contact')">ask</a>!
      </p>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";
import splittingLemmaPaper from "../assets/Splitting_Lemma_Research_20180502.pdf";
import resume from "../assets/Resume_201909.pdf";

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
      splittingLemmaPaper,
      resume
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

  &__resume-button
    display: block
    box-sizing: border-box

    width: 40%
    margin: 5rem auto
    border: 1px solid $text-color
    padding: 1rem

    background-color: $black

    text-align: center
    text-decoration: none
    color: $bg-color

    transition: "background-color" .1s
    transition: color .1s
    &:hover
      background-color: $bg-color
      color: $text-color
      transition: "background-color" .1s
      transition: color .1s

    &[disabled]
      background-color: $bg-color
      color: $text-color
      cursor: default
</style>
