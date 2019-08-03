<template>
  <page>
    <info-page slot="main" :number-of-fields="3" class="resume">
      <h2 slot="intro-heading">Résumé</h2>

      <section slot="1">
        <div class="resume__card resume__card--heading">
          <h1 class="resume__section-heading">Education</h1>
          <hr />
        </div>

        <div class="resume__card">
          <h6 class="resume__subsection-heading">Virginia Tech</h6>
          <caption class="resume__caption">
            2017-2019 (Planned)
          </caption>
          <p class="resume__text">
            Currently working towards a B.S. in mathematics with a minor in
            computer science. Planned graduation three semesters early.
          </p>
        </div>
        <div class="resume__card">
          <h6 class="resume__subsection-heading">
            Maggie L. Walker Governor&rsquo;s School for Government and
            International Studies
          </h6>
          <caption class="resume__caption">
            2013-2017
          </caption>
          <p class="resume__text">
            Completed advanced curriculum including classes in multivariate
            calculus, mathematical proofs, linear algebra, business information
            technology, and calculus-based physics.
          </p>
        </div>
      </section>
      <section slot="2">
        <div class="resume__card resume__card--heading">
          <h1 class="resume__section-heading">Skills</h1>
          <hr />
        </div>

        <div class="resume__card">
          <h6 class="resume__subsection-heading">Software Development</h6>
          <dl class="resume__dl">
            <dt>Full-stack web development</dt>
            <dd>
              Vue.js, Sass, Aurelia, JavaScript, TypeScript, ASP.NET Core MVC,
              Flask, React
            </dd>
            <dt>General</dt>
            <dd>
              Python, C#, C, Java, Bash, Vim
            </dd>
            <dt>DevOps</dt>
            <dd>
              Docker, Travis CI, Coveralls, Webpack, *nix server
            </dd>
            <dt>Des amuses-bouches</dt>
            <dd>
              Unity3D game development, Swift/Objective-C iOS development
            </dd>
          </dl>
        </div>

        <div class="resume__card">
          <h6 class="resume__subsection-heading">Mathematics</h6>
          <dl class="resume__dl">
            <dt>Abstract algebra</dt>
            <dd>
              Group theory, Lie groups, commutative ring theory, abstract linear
              algebra, category theory
            </dd>
            <dt>Linear algebra</dt>
            <dd>
              Three proofs-based linear algebra classes, including linear
              algebra in the complex numbers and in commutative rings, and
              modules.
            </dd>
            <dt>Applied mathematics</dt>
            <dd>
              Stochastic calculus and financial modeling, statistics, game
              theory, cryptography
            </dd>
          </dl>
        </div>

        <div class="resume__card">
          <h6 class="resume__subsection-heading">Communication</h6>
          <dl class="resume__dl">
            <dt>Languages</dt>
            <dd>
              Intermediate-level French, novice-level Chinese
            </dd>
            <dt>Verbal communication</dt>
            <dd>
              Clear and precise writer, confident public speaker.
            </dd>
          </dl>
        </div>
      </section>

      <section slot="3">
        <div class="resume__card resume__card--heading">
          <h1 class="resume__section-heading" style="font-size: 2.0rem">
            Extracurriculars
          </h1>
          <hr />
        </div>

        <div class="resume__card">
          <h6 class="resume__subsection-heading">SailBOT</h6>
          <caption class="resume__caption">
            2017-2019
          </caption>
          <p class="resume__text">
            ECE subteam lead for design team building autonomous sailboat,
            2018-2019. ECE team member, 2017-2018. Designed and built large
            codebase with Python, C, and Cython. Oversaw complete website
            rebuild.
          </p>
        </div>
        <div class="resume__card">
          <h6 class="resume__subsection-heading">Math club</h6>
          <caption class="resume__caption">
            2017-2019
          </caption>
          <p class="resume__text">
            President of official MAA math club at Virginia Tech, 2018-2019.
            Freshman representative, spring 2018. Coordinated talks by faculty
            members, gave presentations on mathematical topics including social
            choice theory.
          </p>
        </div>
      </section>
    </info-page>
  </page>
</template>

<script>
import Page from "../components/page.vue";
import InfoPage from "../components/info-page.vue";

export default {
  components: {
    Page,
    InfoPage
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.resume
  &__section-heading
    font-size: 2.5rem
    font-style: italic

  &__subheading
    font-size: 1.5rem
    font-weight: 500

  &__subsection-heading
    font-size: 1rem
    font-style: italic
    font-weight: 600
    margin-bottom: 0

  &__caption
    display: inline

    text-align: left
    font-weight: 300
    font-style: italic
    font-size: 0.9rem
    color: $mid-grey

  &__text
    font-weight: 300
    max-width: 768px

  &__dl
    font-weight: 300

    dd
      margin-left: 20px

  &__list:last-child
    margin-bottom: 0

  &__card
    max-width: 300px
    padding: 0 25px
    flex-shrink: 1

    &--heading
      flex-shrink: 2

  section
    display: flex
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start

@include media("<=1100px")
  .resume
    section
      flex-direction: column
      margin-left: -1rem

    &__card
      max-width: 100%

@include media("<=500px")
  .resume__section-heading
    font-size: 2rem
</style>
