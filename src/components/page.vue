<template>
  <div class="page">
    <slot name="main"></slot>
    <block-footer />
  </div>
</template>

<script>
import BlockFooter from "./block-footer.vue";

export default {
  components: {
    BlockFooter
  }
};
</script>

<style lang="sass">
@import "../styles/variables"

.page
  margin-left: 2.5rem

  @include media("<tablet")
    margin-left: 0
</style>
