<template>
  <div class="quote">
    <q class="quote__text">{{ quote }}</q>
    <cite class="quote__source">{{ source }}</cite>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote:
        "From time to time, the tree of liberty must be watered with the blood of tyrants and patriots.",
      source: "Thomas Jefferson"
    };
  }
};
</script>
