<template>
  <div id="app">
    <the-sidebar/>
    <router-view/>
  </div>
</template>

<script>
import TheSidebar from "./components/the-sidebar.vue";

export default {
  components: {
    TheSidebar
  }
};
</script>

<style lang="sass">
@import "styles/main"
</style>
