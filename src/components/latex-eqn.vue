<template>
  <div></div>
</template>

<script>
import katex from "katex";

export default {
  props: ["eqn"],
  mounted: async function() {
    let mathOptions = {
      colorIsTextColor: true,
      display: true
    };

    katex.render(this.eqn, this.$el, mathOptions);
  }
};
</script>
