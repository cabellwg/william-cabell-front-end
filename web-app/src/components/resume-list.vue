<template>
  <div class="resume-list">
    <h3 class="resume__subheading">{{ category }}</h3>
    <ul>
      <li class="resume-list__item" v-for="item in list" :key="item.id">
        <div class="resume-list__marker">&#8906;</div>
        <h6 class="resume-list__heading">{{ item.name }}</h6>
        <p class="resume__text" v-if="item.description">{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["category", "list"]
};
</script>

<style lang="sass">
.resume-list
  margin: 10vh 1rem

  &:first-of-type
    margin-top: 7vh

  ul
    padding-left: 0

  &__item
    list-style: none

    p
      margin-top: 0.5rem
      padding-left: 1.05rem

  &__heading
    margin: 1rem 0 0 1.05rem

    font-size: inherit
    font-style: italic
    font-weight: 300

.resume-list__marker
  float: left

  margin-top: 0.125rem

  font-size: 0.8rem
  font-style: normal
</style>
