<template>
  <info-page :number-of-fields="4">

  <h2 slot="intro-heading">Projects</h2>
  <p slot="intro-text">
    I've done some cool stuff over the past few years. Some of it is professional work and some of it is for my own entertainment. If you have questions about anything here, don't hesitate to <a class="intro__text--link" @click="goToContact">contact me</a>.
  </p>

  <section slot="1" class="project">
    <h1 class="project__heading">Converses to the Splitting Lemma in the Category of Groups</h1>
    <caption class="project__caption">Spring semester 2018</caption>
    <figure class="project__math-container">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1slWQsiMRJ_T8VWe0erpysymL3RrAHogU/view?usp=sharing"
        class="project__math-container--cover">
        Click to download paper
      </a>
      <div id="+++0"></div>
    </figure>
    <p class="project__description">I developed an admittedly basic but defendably nontrivial theorem defining a certain way to decompose certain a certain type of group over the <a href="https://groupprops.subwiki.org/wiki/Internal_semidirect_product" target="_blank" class="project__description--link">semidirect product</a>. The theorem forms a (very) partial converse to the <a href="https://en.wikipedia.org/wiki/Splitting_lemma" target="_blank" class="project__description--link">splitting lemma</a>. The full paper can be found <a target="_blank" href="https://drive.google.com/file/d/1slWQsiMRJ_T8VWe0erpysymL3RrAHogU/view?usp=sharing" class="project__description--link">here</a>.</p>
    <p class="project__description">The project was overseen and the original topic of investigating the converse of the splitting lemma was suggested by Dr. Peter Linnell, and I can't thank him enough for taking the time and expending the effort to help me start my mathematics career.</p>
  </section>

  <section slot="2" class="project">
    <h1 class="project__heading">Financial Monte Carlo Simulation</h1>
    <caption class="project__caption">Summer internship 2018</caption>
    <figure class="project__img-container">
      <a
        target="_blank"
        href="https://github.com/cabellwg/monte-carlo"
        class="project__img-container--cover">
        Click to view source
      </a>
      <img class="project__img" src="../assets/monte-carlo-screenshot.png" alt="Graph of portfolio simulation">
    </figure>
    <p class="project__description">At the <a target="_blank" href="http://www.moneyguidepro.com/ifa/" class="project__description--link">PIEtech, Inc.</a> summer internship, I designed and built Monte Carlo simulations of stock prices and bond yields. To model stock prices, I settled on a discretized <a href="https://en.wikipedia.org/wiki/Geometric_Brownian_motion" target="_blank" class="project__description--link">geometric Brownian motion</a> model, which is the stochastic process used to sample prices for the <a href="https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model" target="_blank" class="project__description--link">Black-Scholes model</a>. For bond yields, I used a random walk. Read more about the project and the mathematics behind it on <a target="_blank" href="https://github.com/cabellwg/monte-carlo" class="project__description--link">my GitHub</a>.</p>
  </section>

  <section slot="3" class="project">
    <h1 class="project__heading">This!</h1>
    <caption class="project__caption">Summer 2018</caption>
    <figure>

    </figure>
    <p class="project__description">I made this website of my own accord over summer 2018. It uses Vue.js for the front-end and Flask for the back-end, and is hosted on a DigitalOcean droplet. It is ridiculously overengineered for its scale. The source code is available on <a target="_blank" href="https://github.com/cabellwg/williamcabell" class="project__description--link">my GitHub</a>.</p>
  </section>

  <section slot="4" class="project">
    <h1 class="project__heading">Cabell Design Studio</h1>
    <caption class="project__caption">Summer 2017</caption>
    <figure class="project__img-container">
      <a
        target="_blank"
        href="https://cabelldesignstudio.com"
        class="project__img-container--cover">
        cabelldesignstudio.com
      </a>
      <img class="project__img" src="../assets/cds-screenshot.jpeg" alt="CDS homepage">
    </figure>
    <p class="project__description">I built this website for my mom's interior design business. It uses a good old-fashioned LAMP stack (sans MySQL, because it doesn't really need any kind of database) and Apache-served HTML, CSS, and jQuery on the front end. There's some AJAX sprinkled around, and some attempts (with mixed success) at loading-time optimization (it's a very image-heavy website).</p>
  </section>

  </info-page>
</template>

<script>
import InfoPage from "../components/info-page.vue";
import MathRepository from "../models/math-repository.js";

export default {
  components: {
    InfoPage
  },
  methods: {
    goToContact: function() {
      this.$router.push("contact");
    }
  },
  mounted: async function() {
    let mathOptions = {
      colorIsTextColor: true
    };

    const katex = await import("katex");

    MathRepository.portfolioDisplays.forEach((eqn, index) => {
      let element = document.getElementById("+++" + index);
      mathOptions.display = true;
      katex.render(eqn, element, mathOptions);
    });
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.intro__text
  &--link
    font-weight: 600
    text-decoration: underline
    cursor: pointer
    font-style: italic

    &:hover
      color: $mid-grey

.project
  border-color: inherit

  &__heading
    max-width: 768px
    margin: 5px 0
    font-style: italic
    font-size: 2rem

  &__caption
    display: inline

    text-align: left
    font-weight: 300
    font-style: italic
    font-size: 0.9rem
    color: $mid-grey

  figure
    margin-left: 0
    margin-right: 0

  &__math-container
    position: relative
    box-sizing: border-box
    max-width: 512px
    max-height: 256px
    border: 1px solid
    border-color: inherit
    padding: 40px 60px

    background-color: $bg-color
    // box-shadow: inset 0 0 .5rem $dark-grey

    text-align: center
    color: $text-color

    &--cover
      display: block
      position: absolute
      box-sizing: border-box
      left: 0
      right: 0
      top: 0
      bottom: 0
      padding: 40px 60px
      opacity: 0

      cursor: pointer
      background-color: $black
      z-index: 1

      text-align: center
      font-style: italic
      font-weight: 300
      color: $bg-color

      transition: opacity .2s
      &:hover
        opacity: 0.8
        transition: opacity .2s

  &__img
    width: 90%
    margin: 5%

  &__img-container
    position: relative
    box-sizing: border-box
    width: 100%
    max-width: 768px
    border: 1px solid
    border-color: inherit

    &--cover
      display: block
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      width: 100%
      max-width: 768px
      padding-top: 28%
      opacity: 0

      cursor: pointer
      background-color: $black
      z-index: 1

      text-align: center
      font-style: italic
      font-weight: 300
      color: $bg-color

      transition: opacity .2s
      &:hover
        opacity: 0.8
        transition: opacity .2s

  &__img-caption
    margin-top: 5px
    text-align: left
    font-weight: 300
    font-style: italic
    font-size: 0.9rem
    color: $mid-grey

  &__description
    max-width: 768px
    font-weight: 300

    &--link
      color: inherit
      font-style: italic
      font-weight: 600
      text-decoration: underline
      cursor: pointer

      &:hover
        color: $mid-grey
</style>
