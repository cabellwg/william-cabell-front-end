<template>
  <div>
    <svg viewBox="0 0 100 100">
      <path class="x" d="M15,15 l70,70" />
      <path class="x" d="M15,85 l70,-70" />
    </svg>
  </div>
</template>

<style lang="css" scoped>
.x {
  fill: none;
  stroke: #333333;
  stroke-width: 10;
  stroke-dasharray: 212;
  stroke-dashoffset: 212;
  animation: draw 2.5s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
