<template>
  <Article>
    <article slot="article">
      <section id="title">
        <h1 class="article__title">
          There Is No Perfect Voting System, and I&rsquo;ll Prove It to You
        </h1>
        <p class="article__metadata">
          Friday, August 16, 2019
          <span class="article__metadata--divider"
            >&nbsp;&nbsp;|&nbsp;&nbsp;</span
          >
          10 minutes
        </p>
      </section>

      <section id="intro">
        <p class="article__body">
          On the cold, foggy northwestern shore of Lake Superior lies the small
          city of Thunder Bay, Ontario. Not long after the beginning of time for
          planet Earth, magma poured through Mesoproterozoic rifts into the
          Earth's crust and left behind sheets of hard diabase rock, which icy
          Canadian streams eroded over the eons into flat-topped mesas that
          today cast long shadows onto the vast body of water nearby. But just a
          few hours after the
          <a
            href="https://en.wikipedia.org/wiki/Unix_time"
            target="_blank"
            class="article__body--link"
            >beginning of time</a
          >
          on January 1, 1970, at midnight Eastern Standard Time, something a bit
          more puzzling happened in this spot. Two towns merged into one.
        </p>

        <p class="article__body">
          Port Arthur and Fort William were two nearby towns, both growing fast
          and both about to grow into each other. The local governments decided
          that the two towns needed to merge. The one big question: what to name
          the new town? The answer: ask the residents! The new city at the head
          of the lake would be named by popular vote. Suggestions were taken,
          ballots were made, and a referendum was scheduled. The day came and
          citizens flocked to the polls to choose their favorite of the final
          three options. But when all the votes finally came in, the tally was
          &hellip; interesting:
        </p>

        <table class="article__table">
          <tr class="article__table-row">
            <td class="article__table-data--50">Thunder Bay</td>
            <td class="article__table-data--50">15,870</td>
          </tr>
          <tr class="article__table-row">
            <td class="article__table-data--50">Lakehead</td>
            <td class="article__table-data--50">15,302</td>
          </tr>
          <tr class="article__table-row">
            <td class="article__table-data--50">The Lakehead</td>
            <td class="article__table-data--50">8,377</td>
          </tr>
        </table>

        <caption class="article__caption">
          Source:
          <a
            href="https://web.archive.org/web/20160304100254/http://www.thunderbay.ca/Assets/CEDC/docs/Thunder_Bay_Overview+-+opens+a+new+window.pdf"
            target="_blank"
            class="article__caption--link"
            >Thunder Bay Community Economic Development Commission</a
          >
        </caption>

        <p class="article__body">
          Measuring happiness is hard. Philosophers don't even have a consistent
          <em>definition</em> for it. But I think we can all agree that the new
          city would've been happier with either of the last two options than
          the first (and
          <a
            href="https://en.wikipedia.org/wiki/Bayesian_regret"
            target="_blank"
            class="article__body--link"
            >Thomas Bayes would probably agree</a
          >). So let's put on our mathematician hats and ask ourselves: can we
          make a better voting system?
        </p>
      </section>

      <section id="the-requirements">
        <h3 class="article__subheading">The Requirements</h3>

        <p class="article__body">
          Serious discussion about voting systems is
          <a
            href="https://www.vox.com/the-highlight/2019/8/7/20746147/congress-women-2019-gender-parity"
            target="_blank"
            class="article__body--link"
            style="margin-right: 0.2rem"
            >in</a
          >
          <a
            href="https://newrepublic.com/article/118534/gerrymandering-efficiency-gap-better-way-measure-gerrymandering"
            target="_blank"
            class="article__body--link"
            style="margin-right: 0.2rem"
            >vogue</a
          >
          <a
            href="https://www.politico.com/states/new-jersey/story/2019/03/20/lawmaker-introduces-bill-to-establish-ranked-choice-voting-in-new-jersey-921512"
            target="_blank"
            class="article__body--link"
            style="margin-right: 0.2rem"
            >these</a
          >
          <a
            href="https://www.theatlantic.com/politics/archive/2018/06/maine-lepage-ranked-choice-voting/562871/"
            target="_blank"
            class="article__body--link"
            >days</a
          >. You may have heard that
          <a
            href="https://www.vox.com/2018/6/12/17448450/maine-ranked-choice-voting-paul-lepage-instant-runoff-2018-midterms"
            target="_blank"
            class="article__body--link"
            >Maine switched to ranked-choice voting</a
          >
          for its state elections. Unless you've been living under a rock (or
          outside of the United States) since 2000, you certainly haven't missed
          the constant controversy over the Electoral College's winner-take-all
          style system<sup
            @click="toggleFootnote(0)"
            class="article__body--footnote-link"
            >0</sup
          >.
          <span v-if="footnoteIsOpen[0]" class="article__body--footnote"
            >Controversy over the Electoral College doesn't fall entirely within
            the scope of this discussion. It's not even close to a
            mathematically fair voting system, but it also
            <a
              href="https://en.wikipedia.org/wiki/United_States_Electoral_College#Original_plan"
              target="_blank"
              class="article__body--link"
              >isn't supposed to be</a
            >.</span
          >
          But we aren't going to be talking about any specific voting system –
          mathematicians can do better than that! What are criteria to which
          <em>every</em> mathematically fair voting system should adhere?
        </p>
      </section>
    </article>
  </Article>
</template>

<script>
import Article from "../views/article.vue";

export default {
  components: {
    Article
  },
  metaInfo: function() {
    return {
      title: "Blog",
      titleTemplate: "%s | William Cabell",
      meta: [
        {
          name: "description",
          content:
            "On the cold, foggy northwestern shore of Lake Superior lies the small city of Thunder Bay, Ontario. Not long after"
        }
      ]
    };
  },
  data: function() {
    return {
      footnoteIsOpen: [false]
    };
  },
  methods: {
    toggleFootnote: function(index) {
      this.$set(this.footnoteIsOpen, index, !this.footnoteIsOpen[index]);
    }
  }
};
</script>

<style lang="sass"></style>
