<template>
  <div id="app">
    <the-sidebar id="menu" class="menu menu--mobile-hidden" />
    <router-view />
  </div>
</template>

<script>
import TheSidebar from "./components/the-sidebar.vue";

export default {
  components: {
    TheSidebar
  },
  created: function() {
    this.$on("toggleMenu", () => {
      this.toggleMenu();
    });
  },
  methods: {
    toggleMenu: function() {
      let menu = document.getElementById("menu");
      menu.classList.toggle("menu--mobile-hidden");
    }
  }
};
</script>

<style lang="sass">
@import "styles/main"

.menu
  position: fixed
  float: left
  z-index: 3
  transition: margin-left 0.2s ease-in-out

.menu--mobile-hidden
  @include media("<tablet")
    margin-left: -2.5rem

    #nav
      box-shadow: none
</style>
