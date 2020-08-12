<template>
  <page>
    <main slot="main" class="stuff">
      <h1 class="stuff__title">Stuff</h1>
      <p class="stuff__text">
        Mostly about mathematics or software. Right now it&rsquo;s just a thing,
        not stuff. But come back and maybe a new thing will appear.
      </p>

      <hr />

      <div class="stuff__articles">
        <div
          class="stuff__card"
          @click="
            goToArticle(
              'there-is-no-perfect-voting-system-and-ill-prove-it-to-you'
            )
          "
        >
          <h4 class="stuff__card-title">
            There Is No Perfect Voting System, and I&rsquo;ll Prove It to You
          </h4>
          <p class="stuff__card-date">September 2019</p>

          <p class="stuff__card-preview">
            On the cold, foggy northwestern shore of Lake Superior lies the
            small city of Thunder Bay, Ontario. Not long after the fiery birth
            of planet Earth, magma poured
          </p>
        </div>
      </div>
    </main>
  </page>
</template>

<script>
import Page from "../components/page.vue";

export default {
  components: {
    Page,
  },
  metaInfo: function () {
    return {
      title: "Stuff",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "I don’t think Facebook and the NSA have enough data about me so I decided to put some things here to help them out.",
        },
      ],
    };
  },
  methods: {
    goToArticle: function (articleTitle) {
      this.$router.push("/stuff/" + articleTitle);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.stuff
  max-width: 1360px
  box-sizing: border-box

  margin: 0 auto
  padding: 3rem

  @include media("<tablet")
    padding: 1.5rem

  hr
    width: 20vw
    max-width: 150px
    height: 3px
    margin: 3vh auto
    border: none

    background-color: $text-color

  &__title
    margin-top: 0
    margin-bottom: 5vh

    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
    color: $text-color
    text-align: center

  &__text
    max-width: 500px
    width: 90%

    text-align: center
    font-weight: 300

    margin: 3rem auto 2.25rem

  &__articles
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    flex-direction: row
    align-items: flex-start

  &__card
    margin: 1rem 0
    min-width: 375px
    width: 40%
    height: 300px
    padding: 1rem
    box-sizing: border-box

    cursor: pointer

    @include media("<tablet")
      width: 100%
      min-width: 250px
      height: auto

    &:nth-child(3n+1)
      background-color: $really-light-grey

    &:nth-child(3n+2)
      background-color: $text-color

      .stuff__card
        &-title
          color: $bg-color

        &-preview
          color: $bg-color

    &:nth-child(3n)
      border: 1px solid $text-color

    &-title
      margin-bottom: 0
      font-size: 1rem
      font-style: italic
      font-weight: 800

    &-date
      margin-top: 0.5rem
      font-size: 0.7rem
      font-style: italic
      font-weight: 300
      color: $mid-grey

    &-preview
      font-weight: 300

      &::after
        content: "Read more >>"
        font-weight: 800
        font-style: italic
        text-decoration: underline
</style>
