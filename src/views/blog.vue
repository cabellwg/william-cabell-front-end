<template>
  <page>
    <main slot="main" class="blog">
      <h1 class="blog__page-title">Blog</h1>

      <div class="blog__articles">
        <div
          class="blog__card"
          @click="
            goToArticle(
              'there-is-no-perfect-voting-system-and-ill-prove-it-to-you'
            )
          "
        >
          <h4 class="blog__card-title">
            There Is No Perfect Voting System, and I&rsquo;ll Prove It to You
          </h4>
          <p class="blog__card-date">Friday, August 16, 2019</p>

          <p class="blog__card-preview">
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
    Page
  },
  metaInfo: function() {
    return {
      title: "Blog",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "I don’t think Facebook and the NSA have enough data about me so I decided to write a few blog articles to help them out."
        }
      ]
    };
  },
  methods: {
    goToArticle: function(articleTitle) {
      this.$router.push("/blog/" + articleTitle);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.blog
  max-width: 1360px
  box-sizing: border-box

  margin: 0 auto
  padding: 3rem

  @include media("<tablet")
    padding: 1.5rem

  &__page-title
    margin-top: 0
    margin-bottom: 3rem
    font-size: 1.7rem
    font-style: italic
    font-weight: 800
    letter-spacing: -0.01rem
    text-align: center

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

    transition: box-shadow .1s

    @include media("<tablet")
      width: 100%
      min-width: 250px
      height: auto

    &:nth-child(3n+1)
      background-color: $really-light-grey

    &:nth-child(3n+2)
      background-color: $text-color

      .blog__card
        &-title
          color: $bg-color

        &-preview
          color: $bg-color

    &:nth-child(3n)
      border: 1px solid $text-color

    &:hover
      box-shadow: 3px 3px 4px $light-grey
      transition: box-shadow .05s

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
