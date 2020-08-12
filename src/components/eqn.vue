<template>
  <span></span>
</template>

<script>
import katex from "katex";

export default {
  props: ["eqn", "display"],
  mounted: async function () {
    let mathOptions = {
      colorIsTextColor: true,
      displayMode: this.display ? true : false, // no type safety!
    };

    if (this.display) {
      this.$el.classList.add("katex__display");
    } else {
      this.$el.classList.add("katex__inline");
    }

    katex.render(this.eqn, this.$el, mathOptions);
  },
};
</script>

<style lang="sass">

.katex
  font-size: inherit

.katex__display
  display: block
</style>
