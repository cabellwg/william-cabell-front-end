<template>
  <Article>
    <article slot="article" class="article">
      <section id="title">
        <h1 class="article__title">
          A Classical Coronavirus Model
        </h1>
        <p class="article__metadata">
          Saturday, June 6, 2020
          <span class="article__metadata--divider"
            >&nbsp;&nbsp;|&nbsp;&nbsp;</span
          >
          30 minute read
        </p>
      </section>

      <section id="intro" class="article__section">
        <p class="article__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste commodi
          voluptatibus, illum iusto vero facilis deserunt
          <eqn eqn="a + b" /> sit ducimus, similique nihil aliquid ipsa,
          cupiditate dolorum saepe optio animi vel voluptas ipsum.
        </p>
      </section>

      <section id="" class="article__section">
        <h2 class="article__subheading"></h2>
      </section>
    </article>
  </Article>
</template>

<script>
import * as d3 from "d3";

import Article from "../views/article.vue";
import Eqn from "../components/eqn.vue";

export default {
  components: {
    Article,
    Eqn,
  },
  metaInfo: function () {
    return {
      title: "A Classical Coronavirus Model",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "On the cold, foggy northwestern shore of Lake Superior lies the small city of Thunder Bay, Ontario. Not long after",
        },
      ],
    };
  },
  data: function () {
    return {
      footnoteIsOpen: [],
    };
  },
  methods: {
    toggleFootnote: function (index) {
      this.$set(this.footnoteIsOpen, index, !this.footnoteIsOpen[index]);
    },
  },
};
</script>
