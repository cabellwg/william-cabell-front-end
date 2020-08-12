<template>
  <page>
    <div class="contact page__content" slot="main">
      <h1 class="contact__title">Contact</h1>

      <p class="contact__text">
        You can email me at
        <a href="mailto:william16180@gmail.com" class="contact__text--link">
          william16180@gmail.com
        </a>
        or fill out this handy form, and I&rsquo;ll get back to you as soon as I
        can!
      </p>

      <hr />

      <contact-form />
    </div>
  </page>
</template>

<script>
import ContactForm from "../components/contact-form.vue";
import Page from "../components/page.vue";

export default {
  components: {
    ContactForm,
    Page,
  },
  metaInfo: function () {
    return {
      title: "Contact",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "I met a traveler from an antique land, / Who said––“Use the contact form if you have any questions for me.”",
        },
      ],
    };
  },
};
</script>

<style lang="sass">
@import "../styles/variables"

.contact
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center

  text-align: center

  hr
    width: 20vw
    max-width: 150px
    height: 3px
    margin: 3vh 1rem
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

  &__text
    max-width: 500px
    width: 90%

    text-align: center
    font-weight: 300

    &--link
      font-weight: 600
      text-decoration: underline
      font-style: italic
      color: inherit

      &:hover
        color: $mid-grey

  &-form
    flex-grow: 2

    max-width: 15rem
    width: 90%
</style>
