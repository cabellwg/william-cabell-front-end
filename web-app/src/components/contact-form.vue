<template>
  <form class="contact-form" method="post">
      <div class="contact-form__field">
        <label
          for="name"
          class="contact-form__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          autocomplete="on name"
          required
          class="contact-form__input" />
    </div>

    <div class="contact-form__field">
      <label
        for="organization"
        class="contact-form__label">
        Organization
          <span class="contact-form__label--optional">
            – Optional
          </span>
      </label>
      <input
        type="text"
        name="organization"
        class="contact-form__input" />
    </div>

    <div class="contact-form__field">
      <label
        for="email"
        class="contact-form__label">
        Email
      </label>
      <input
        type="email"
        name="email"
        autocomplete="on email"
        class="contact-form__input" />
    </div>

    <div class="contact-form__field contact-form__field--tall">
      <label
        for="message"
        class="contact-form__label">
        Message
      </label>
      <textarea
        name="message"
        class="contact-form__input contact-form__textarea">
      </textarea>
    </div>

    <div class="contact-form__field contact-form__field--submit">
      <input
        type="submit"
        name="submit"
        value="Send"
        class="contact-form__submit-button" />
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "../styles/variables"

.contact-form
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center

  margin-bottom: 2rem

  &__field
    width: 100%
    margin: 2% 0
    padding: 2%

    &--tall
      flex: 1 1 auto

  &__label
    display: block
    box-sizing: border-box

    font-style: italic
    font-weight: 300
    text-align: left

    &--optional
      color: $light-grey

  &__input
    display: block
    box-sizing: border-box

    background-color: $bg-color

    width: 100%
    margin: 0.2rem 0
    border: 1px solid $text-color
    padding: 0.5rem

    font-weight: 300

    &:focus
      box-shadow: 0 0 5px $light-grey

  &__textarea
    display: block

    max-width: 100%
    max-height: 20rem
    height: 20rem

    overflow: auto
    resize: none

input[type="submit"].contact-form__submit-button
    display: block
    box-sizing: border-box

    width: 60%
    margin: 0.2rem 0
    border: 1px solid $text-color
    padding: 1rem

    background-color: $black

    color: $bg-color

    &:hover
      background-color: $bg-color
      color: $text-color
      transition: "background-color" .1s
      transition: color .1s

</style>
