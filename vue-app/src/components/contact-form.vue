<template>
  <form class="contact-form">
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
          class="contact-form__input"
          v-model="name" />
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
        class="contact-form__input"
        v-model="organization" />
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
        required
        autocomplete="on email"
        class="contact-form__input"
        v-model="email" />
    </div>

    <div class="contact-form__field contact-form__field--tall">
      <label
        for="message"
        class="contact-form__label">
        Message
      </label>
      <textarea
        name="message"
        required
        class="contact-form__input contact-form__textarea"
        v-model="message">
      </textarea>
    </div>

    <div class="contact-form__field contact-form__field--submit">
      <button
        id="send-button"
        type="button"
        @click="sendMessage"
        class="contact-form__submit-button">
        Send
      </button>
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="spinner__container">
          <div class="spinner"></div>
        </div>
        <div v-if="sent" id="sent" class="sent">Sent!</div>
      </transition>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      organization: "",
      email: "",
      message: "",
      loading: false,
      sent: false
    };
  },
  computed: {
    formData: function() {
      return {
        name: this.name,
        organization: this.organization,
        email: this.email,
        message: this.message
      };
    }
  },
  methods: {
    sendMessage: function() {
      this.sendButtonPressed();

      let request = {
        url: "http://127.0.0.1:5000/api/contact",
        method: "post",
        headers: {
          // eslint-disable-next-line
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        // withCredentials: true,
        data: this.formData
      };

      axios(request).then(() => {
        this.finished();
      });
    },
    sendButtonPressed: function() {
      let sendButton = document.getElementById("send-button");
      sendButton.disabled = true;
      sendButton.innerHTML = "Sending...";
      this.sent = false;
      this.loading = true;
    },
    finished: function() {
      let sendButton = document.getElementById("send-button");
      sendButton.disabled = false;
      sendButton.innerHTML = "Send";
      this.loading = false;
      this.sent = true;

      setTimeout(() => {
        this.sent = false;
      }, 3000);
    }
  }
};
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

    &--submit
      position: relative

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

  &__submit-button
    display: block
    float: left
    box-sizing: border-box

    width: 60%
    margin: 0.2rem 0
    border: 1px solid $text-color
    padding: 1rem

    background-color: $black

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

  .spinner
    position: absolute
    left: 60%
    // This is brilliant, and I can't take credit for it. This came from https://codepen.io/Beaugust/pen/DByiE.
    box-sizing: border-box
    width: 2.5rem
    height: 2.5rem
    margin-top: 0.55rem
    margin-left: 1rem
    border-radius: 100%
    border: 0.25rem solid rgba(255, 255, 255, 0)
    border-top-color: $text-color
    animation: spin 0.35s infinite linear

    &-enter, &-leave
      opacity: 0

      &-active
        transition: opacity .1s


  .sent
    position: absolute
    left: 60%

    box-sizing: border-box
    margin: 0.2rem 0rem
    border: 1px solid rgba(255, 255, 255, 0)
    padding: 1rem

    font-weight: 800
    font-style: italic

.fade
  &-enter
    opacity: 0

    &-active
      transition: opacity .1s

  &-leave
    &-active
      transition: opacity .3s

    &-to
      opacity: 0

@keyframes spin
  100%
    transform: rotate(360deg)

</style>
