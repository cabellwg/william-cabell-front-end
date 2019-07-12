<template>
  <div>
    <svg viewBox="0 0 150 150">
      <path id="check" d="M5,70 l45,45 l95,-95" />
    </svg>
  </div>
</template>

<style lang="css" scoped>
#check {
  fill: none;
  stroke: #333333;
  stroke-width: 15;
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
