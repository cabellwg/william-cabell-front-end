<template>
  <Article>
    <article slot="article" class="article">
      <section id="title">
        <h1 class="article__title">
          There Is No Perfect Voting System, and I&rsquo;ll Prove It to You
        </h1>
        <p class="article__metadata">
          Friday, September 6, 2019
          <span class="article__metadata--divider"
            >&nbsp;&nbsp;|&nbsp;&nbsp;</span
          >
          20 minute read
        </p>
      </section>

      <section id="intro" class="article__section">
        <p class="article__body">
          On the cold, foggy northwestern shore of Lake Superior lies the small
          city of Thunder Bay, Ontario. Not long after the fiery birth of planet
          Earth, magma poured through Mesoproterozoic rifts into the
          Earth&rsquo;s crust and left behind sheets of hard diabase rock, which
          icy Canadian streams eroded over the eons into flat-topped mesas that
          today cast long shadows onto the vast body of water nearby. But just a
          few hours after the much less dramatic
          <a
            href="https://en.wikipedia.org/wiki/Unix_time"
            target="_blank"
            class="article__body--link"
            >birth of time</a
          >
          on January 1, 1970, at midnight Eastern Standard Time, something a bit
          more puzzling happened in this spot. Two towns merged into one.
        </p>

        <p class="article__body">
          Port Arthur and Fort William were two nearby towns, both growing fast
          and both about to grow into each other. The local governments decided
          that the two towns needed to merge. They had one question: what to
          name the new town? They also had an answer: ask the residents! The new
          city at the head of the lake would be named by popular vote.
          Suggestions were taken, ballots were drawn up with the leading
          suggestions, and a referendum was scheduled. The day came and citizens
          flocked to the polls to choose their favorite of the final three
          options. But when all the votes finally came in, the tally was
          &hellip; interesting:
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table class="article__table">
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--50">
                Thunder Bay
              </td>
              <td class="article__table-data article__table-data--50">
                15,870
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--50">
                Lakehead
              </td>
              <td class="article__table-data article__table-data--50">
                15,302
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--50">
                The Lakehead
              </td>
              <td class="article__table-data article__table-data--50">8,377</td>
            </tr>
          </table>
        </div>

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
          Measuring happiness is hard. Philosophers don&rsquo;t even have a
          consistent definition for it. But I think we can all agree that the
          residents of the new city would&rsquo;ve been happier with either of
          the last two options than the first (and
          <a
            href="https://en.wikipedia.org/wiki/Bayesian_regret"
            target="_blank"
            class="article__body--link"
            >The Rev. Bayes would probably agree</a
          >). Spoiler candidates constantly hassle
          <a
            href="https://en.wikipedia.org/wiki/First-past-the-post_voting"
            target="_blank"
            class="article__body--link"
            >first-past-the-post</a
          >
          voting systems. But is there a better alternative?
        </p>
      </section>

      <section id="alls-fair-in-love-war-and-politics" class="article__section">
        <h2 class="article__subheading">
          All&rsquo;s Fair in Love, War, and Politics
        </h2>

        <p class="article__body">
          Serious discussion about electoral systems is
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
          >. You may have heard that, in 2018,
          <a
            href="https://www.vox.com/2018/6/12/17448450/maine-ranked-choice-voting-paul-lepage-instant-runoff-2018-midterms"
            target="_blank"
            class="article__body--link"
            >Maine switched to ranked-choice voting</a
          >
          for its state elections. Unless you&rsquo;ve been living under a rock
          (or outside of the United States) since 2000, you certainly
          haven&rsquo;t missed the constant controversy over the Electoral
          College&rsquo;s winner-take-all style system that decides U.S.
          presidential elections<sup
            @click="toggleFootnote(0)"
            class="article__body--footnote-link"
            >0</sup
          >.
          <transition name="fade">
            <span v-if="footnoteIsOpen[0]" class="article__body--footnote"
              >Controversy over the Electoral College doesn&rsquo;t fall
              entirely within the scope of this discussion. It&rsquo;s not even
              close to a mathematically fair voting system, but it also
              <a
                href="https://en.wikipedia.org/wiki/United_States_Electoral_College#Original_plan"
                target="_blank"
                class="article__body--link"
                >isn&rsquo;t supposed to be</a
              >.</span
            >
          </transition>
          But before we pillory any particular method, let&rsquo;s first prove
          that a fair system exists. We will explore some foundational results
          of social choice theory, a branch of mathematics dedicated to formally
          studying such problems.
        </p>

        <p class="article__body">
          When the field of social choice theory blossomed in the middle of the
          20th century, mathematician Kenneth Arrow theorized three<sup
            @click="toggleFootnote(1)"
            class="article__body--footnote-link"
            >1</sup
          >
          <transition name="fade">
            <span v-if="footnoteIsOpen[1]" class="article__body--footnote"
              >Depending on which assumptions you include in your definition of
              a social choice function, you may need up to five
              conditions.</span
            >
          </transition>
          conditions that any mathematically fair voting system should satisfy.
          Make sure you agree with each one before moving on – they&rsquo;re all
          quite reasonable.
        </p>

        <h3 class="article__subsubheading">0. Unanimity</h3>

        <p class="article__body">
          A voting system respects unanimity if when every single person votes
          for one candidate, that candidate wins. First-past-the-post systems
          obviously satisfy unanimity. For any ranked voting system, we phrase
          unanimity as follows: if every person ranks candidate
          <eqn eqn="A" /> higher than candidate <eqn eqn="B" />, then the
          outcome will rank candidate <eqn eqn="A" /> higher than candidate
          <eqn eqn="B" />. Note that candidate <eqn eqn="A" /> doesn&rsquo;t
          necessarily win, but only beats candidate <eqn eqn="B" />. For all we
          care, a third, dark horse candidate <eqn eqn="C" /> could beat both
          <eqn eqn="A" /> and <eqn eqn="B" />. And, if one single person ranks
          <eqn eqn="B" /> above <eqn eqn="A" />, we don&rsquo;t have any
          constraints on the outcome anymore. <eqn eqn="A" /> could beat
          <eqn eqn="B" /> or <eqn eqn="B" /> could beat <eqn eqn="A" />. It
          doesn&rsquo;t concern unanimity anymore. Unanimity is sometimes
          referred to as the weak Pareto condition or Pareto efficiency.
        </p>

        <h3 class="article__subsubheading">1. Nondictatorship</h3>

        <p class="article__body">
          A voting system respects nondictatorship if there is no person
          <eqn eqn="P" /> who can always determine the outcome of the election.
          For example, a voting system that discards every ranking except person
          <eqn eqn="P" />&rsquo;s and then uses <eqn eqn="P" />&rsquo;s ballot
          to determine the outcome violates nondictatorship.
        </p>

        <h3 class="article__subsubheading">
          2. Independence of Irrelevant Alternatives
        </h3>

        <p class="article__body">
          A voting system respects independence of irrelevant alternatives if a
          candidate dropping out doesn&rsquo;t affect the results. Let&rsquo;s
          walk through an example before we state it more formally. Suppose
          Senators Henry Clay, Daniel Webster, and John C. Calhoun all decide to
          run for the same Senate seat. Clay barely wins, Webster follows in
          second, and Calhoun ends up third. The narrowly decided election falls
          within the margin for a mandatory recount. But before the second
          tally, Senator Webster decides that he would rather allocate his time
          to further developing his
          <a
            href="https://en.wikipedia.org/wiki/Webster/Sainte-Lagu%C3%AB_method"
            target="_blank"
            class="article__body--link"
            >apportionment algorithm</a
          >, and withdraws. Fortunately, everyone specified a second choice, so
          the count can continue without a second whole election. Then the
          second time, Calhoun beats Clay! Apparently, many of Webster&rsquo;s
          voters specified Calhoun as their second choice. This outcome confuses
          the voters – if the people preferred Calhoun to Clay in a direct
          match-up, obviously Clay should never beat Calhoun! A voting system
          satisfying independence of irrelevant alternatives must preserve the
          relative ranking of candidates, regardless of any other
          candidate&rsquo;s addition into or removal from the election.
        </p>

        <p class="article__body">
          Now we will tell the story of an election with a voting system
          satisfying all of these conditions. It will have three parts.
        </p>
      </section>

      <section id="pivotal-voter" class="article__section">
        <h2 class="article__subheading">
          Part I. The Pivotal Voter
        </h2>

        <p class="article__body">
          Our story will begin with three<sup
            @click="toggleFootnote(2)"
            class="article__body--footnote-link"
            >2</sup
          >
          <transition name="fade">
            <span v-if="footnoteIsOpen[2]" class="article__body--footnote"
              >A story faithful to the original mathematics would consider
              <eqn eqn="n" /> main characters. But the same tale can be told
              more simply and more concretely with only three.</span
            >
          </transition>
          main characters: Alice, Bob, and Carol. Alice, Bob, and Carol have
          each campaigned for weeks to earn a seat on the local board of
          supervisors. Now it&rsquo;s time for the county to vote. The outcome
          isn&rsquo;t yet determined, so we&rsquo;ll prepare by brute force –
          checking every possible way that people could vote and making sure the
          voting system doesn&rsquo;t break.
        </p>

        <p class="article__body">
          We&rsquo;ll start by assuming that everyone hates Bob. Perhaps Bob
          tweeted in favor of locating a nuclear waste dump site in the county
          six or seven years ago, and Carol&rsquo;s campaign dug it up and
          plastered it all over television. Then (from now on using
          <eqn eqn="A" />, <eqn eqn="B" />, and <eqn eqn="C" /> to represent
          Alice, Bob, and Carol repsectively) the ballots of all
          <eqn eqn="n" /> citizens would look like this:
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table class="article__table" style="min-width: 521px">
            <tr class="article__table-row">
              <th class="article__table-heading"></th>
              <th class="article__table-heading">Citizen 1</th>
              <th class="article__table-heading">Citizen 2</th>
              <th class="article__table-heading">&hellip;</th>
              <th class="article__table-heading">Citizen <eqn eqn="n" /></th>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">0</td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">1</td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">2</td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
            </tr>
          </table>
        </div>

        <caption class="article__caption">
          Configuration 0
        </caption>

        <p class="article__body">
          Since the system in use satisfies unanimity, the outcome will rank
          both <eqn eqn="A" /> and <eqn eqn="C" /> higher than <eqn eqn="B" />.
          We will call this <em>Configuration 0</em>.
        </p>

        <p class="article__body">
          Next let&rsquo;s assume that everyone loves Bob. Maybe, in an
          alternate universe, Bob tweeted that he would give everyone in the
          county $1,000. Then the ballots might look more like this:
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table class="article__table" style="min-width: 521px">
            <tr class="article__table-row">
              <th class="article__table-heading"></th>
              <th class="article__table-heading">Citizen 1</th>
              <th class="article__table-heading">Citizen 2</th>
              <th class="article__table-heading">&hellip;</th>
              <th class="article__table-heading">Citizen <eqn eqn="n" /></th>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">0</td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">1</td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">2</td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
          </table>
        </div>

        <caption class="article__caption">
          Configuration
          <eqn eqn="n" />
        </caption>

        <p class="article__body">
          Again, because of unanimity, the outcome will rank
          <eqn eqn="B" /> higher than both <eqn eqn="A" /> and <eqn eqn="C" />.
          We will call this <em>Configuration <eqn eqn="n"/></em>. Now that we
          have two of the configurations, we can define all the other ones. Let
          <em>Configuration <eqn eqn="i"/></em> be the configuration where
          <eqn eqn="i" /> voters hate <eqn eqn="B" /> and
          <eqn eqn="n - i" /> voters love <eqn eqn="B" />.
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table
            class="article__table article__table--scrunch"
            style="min-width: 518px"
          >
            <tr class="article__table-row">
              <th
                class="article__table-heading article__table-heading--scrunch"
              ></th>
              <th class="article__table-heading">Citizen 1</th>
              <th class="article__table-heading">Citizen 2</th>
              <th
                class="article__table-heading article__table-heading--scrunch"
              >
                &hellip;
              </th>
              <th class="article__table-heading">Citizen <eqn eqn="i" /></th>
              <th
                class="article__table-heading article__table-heading--scrunch"
              >
                &hellip;
              </th>
              <th class="article__table-heading">Citizen <eqn eqn="n" /></th>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                0
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                1
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                2
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" /> or <eqn eqn="C" />
              </td>
            </tr>
          </table>
        </div>

        <caption class="article__caption">
          Configuration
          <eqn eqn="i" />
        </caption>

        <p class="article__body">
          Clearly there&rsquo;s some minimum <eqn eqn="k" /> for which
          Configuration <eqn eqn="k" /> has <eqn eqn="B" /> beating
          <eqn eqn="A" />. It might not be when <eqn eqn="B" /> gets to a
          majority, since we don&rsquo;t know exactly how we&rsquo;re counting
          votes. But at one end <eqn eqn="B" /> loses to <eqn eqn="A" /> and at
          the other <eqn eqn="B" /> wins to <eqn eqn="A" />, so somewhere in
          between, even if it&rsquo;s at <eqn eqn="k = n - 1" /> or even
          <eqn eqn="k = n" />, <eqn eqn="B" /> must beat <eqn eqn="A" /> at some
          point. We&rsquo;ll refer to citizen <eqn eqn="k" />, the citizen whose
          ballot causes <eqn eqn="B" /> to win, as the
          <em>pivotal voter for <eqn eqn="B"/> over <eqn eqn="A"/></em>.
          We&rsquo;ll name her Karen.
        </p>
      </section>

      <section id="a-dictator" class="article__section">
        <h2 class="article__subheading">Part II. A Dictator</h2>

        <p class="article__body">
          Observe that it doesn&rsquo;t matter how the voters in any
          configuration rank <eqn eqn="A" /> and <eqn eqn="C" /> relative to
          each other. Because of independence of irrelevant alternatives, we can
          take <eqn eqn="C" /> out of the running and Karen still determines
          <eqn eqn="B" /> over <eqn eqn="A" />. Karen, however, has decided to
          become an active participant in the election, and she&rsquo;s no
          longer satisfied with such an incomplete influence.
        </p>

        <p class="article__body">
          Karen splits the configurations into two sections: all the ballots
          before her and all the ballots after her. She notices that in the
          configuration where the first section is
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table class="article__table" style="min-width: 521px">
            <tr class="article__table-row">
              <th class="article__table-heading"></th>
              <th class="article__table-heading">Citizen 1</th>
              <th class="article__table-heading">Citizen 2</th>
              <th
                class="article__table-heading article__table-heading--scrunch"
              >
                &hellip;
              </th>
              <th class="article__table-heading">
                Citizen <eqn eqn="k - 1" />
              </th>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">0</td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">1</td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data">2</td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
            </tr>
          </table>
        </div>

        <p class="article__body">
          and the second section is
        </p>

        <div
          class="article__table-container article__table-container--with-caption"
        >
          <table class="article__table" style="min-width: 529px">
            <tr class="article__table-row">
              <th
                class="article__table-heading article__table-heading--scrunch"
              ></th>
              <th class="article__table-heading">
                Citizen <eqn eqn="k + 1" />
              </th>
              <th class="article__table-heading">
                Citizen <eqn eqn="k + 2" />
              </th>
              <th
                class="article__table-heading article__table-heading--scrunch"
              >
                &hellip;
              </th>
              <th class="article__table-heading">Citizen <eqn eqn="n" /></th>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                0
              </td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="A" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                1
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="B" />
              </td>
            </tr>
            <tr class="article__table-row">
              <td class="article__table-data article__table-data--scrunch">
                2
              </td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
              <td class="article__table-data article__table-data--scrunch">
                &hellip;
              </td>
              <td class="article__table-data">
                <eqn eqn="C" />
              </td>
            </tr>
          </table>
        </div>

        <p class="article__body">
          and she votes <eqn eqn="\left[A, B, C\right]" /> then
          <eqn eqn="A" /> beats <eqn eqn="B" /> (by independence of irrelevant
          alternatives, the new ballots rank <eqn eqn="A" /> and
          <eqn eqn="B" /> the same way as Configuration <eqn eqn="k - 1" />)
          and, by unanimity, <eqn eqn="B" /> must beat <eqn eqn="C" /> (since
          <eqn eqn="B" /> ranks above <eqn eqn="C" /> on every ballot).
        </p>

        <p class="article__body">
          Karen also considers voting <eqn eqn="\left[B, A, C\right]" />.
          Removing <eqn eqn="C" /> from the ballots, the configuration matches
          Configuration <eqn eqn="k" />. That means the order of
          <eqn eqn="A" /> and <eqn eqn="B" /> switches (because of independence
          of irrelevant alternatives): <eqn eqn="B" /> will beat
          <eqn eqn="A" />. By independence of irrelevant alternatives again, the
          relative ranking of <eqn eqn="A" /> and <eqn eqn="C" /> remains
          unaltered. Then <eqn eqn="B" /> beats <eqn eqn="C" />.
        </p>

        <p class="article__body">
          A serious problem now arises. What if every other voter switched the
          order of <eqn eqn="B" /> and <eqn eqn="C" /> on their ballots? Because
          of independence of irrelevant alternatives, the relative rankings of
          <eqn eqn="B" /> and <eqn eqn="A" /> and <eqn eqn="A" /> and
          <eqn eqn="C" /> both would be preserved, so <eqn eqn="B" /> would
          still beat <eqn eqn="C" />. But only Karen prefers <eqn eqn="B" /> to
          <eqn eqn="C" />! Karen has become a
          <em>dictator for <eqn eqn="B"/> over <eqn eqn="C"/></em>.
        </p>
      </section>

      <section id="the-dictator" class="article__section">
        <h2 class="article__subheading">Part III. The Dictator</h2>

        <p class="article__body">
          <eqn eqn="A" />, <eqn eqn="B" />, and <eqn eqn="C" /> were arbitrary
          placeholders, so Karen has counterparts: a dictator for
          <eqn eqn="A" /> over <eqn eqn="C" />, a dictator for
          <eqn eqn="C" /> over <eqn eqn="B" />, and dictators for the three
          other permutations of two candidates from three. But as fate dooms
          every triumvirate (or sextumvirate, in this case) to collapse into
          autocracy, dictating <eqn eqn="B" /> over <eqn eqn="C" /> no longer
          quells Karen&rsquo;s ambition – not when others possess equivalent
          power.
        </p>

        <p class="article__body">
          But then Karen notices something. She may not have any competition
          after all. The pivotal voter for <eqn eqn="B" /> over
          <eqn eqn="C" /> (the dictator for <eqn eqn="B" /> over
          <eqn eqn="A" />) must appear in line before or at the same place as
          Karen, or else Karen wouldn&rsquo;t be able to truly choose
          <eqn eqn="B" /> over <eqn eqn="C" />. By the same logic, the dictator
          for <eqn eqn="C" /> over <eqn eqn="B" /> must appear after or in the
          same place as the pivotal voter for <eqn eqn="B" /> over
          <eqn eqn="C" />. But nothing about the story we&rsquo;ve told so far
          depends on <eqn eqn="B" /> and <eqn eqn="C" /> specifically. That
          means we could switch <eqn eqn="B" /> and <eqn eqn="C" /> on
          everyone&rsquo;s ballots and everything established so far would
          remain (with <eqn eqn="B" /> and <eqn eqn="C" /> switched). Once
          again, Karen&rsquo;s observation leads to a startling realization.
          Since the dictator for <eqn eqn="C" /> over <eqn eqn="B" /> must
          appear both before or at the same place as Karen and after or at the
          same place as Karen, Karen must be the dictator for
          <eqn eqn="C" /> over <eqn eqn="B" />. Karen, then, chooses which of
          <eqn eqn="B" /> or <eqn eqn="C" /> beats the other in every case.
          Karen is a dictator for <eqn eqn="B" /> and <eqn eqn="C" />. But the
          dictator for <eqn eqn="B" /> over <eqn eqn="A" /> was also sandwiched
          in between Karen and Karen. That means Karen must also be the dictator
          for <eqn eqn="B" /> over <eqn eqn="A" />. Repeating the argument (with
          different letters), only Karen decides which of <eqn eqn="B" /> and
          <eqn eqn="A" /> beats the other. Therefore Karen, from her humble
          beginnings as citizen <eqn eqn="k" />, used deductive reasoning to
          determine that she completely dictates the outcome of the election.
        </p>
      </section>

      <section id="on-aristotelian-democracy" class="article__section">
        <h2 class="article__subheading">
          On Aristotelian Democracy
        </h2>

        <p class="article__body">
          The story told here did not tie itself to any one specific voting
          system. Any voting system that weakly<sup
            @click="toggleFootnote(3)"
            class="article__body--footnote-link"
            >3</sup
          >
          <transition name="fade">
            <span v-if="footnoteIsOpen[3]" class="article__body--footnote"
              >In a weak ranking, a voter can rank two (or more) candidates as
              equal. In a strong ranking, voters must always make a choice
              between two candidates. Any strong ranking is a weak ranking, but
              not vice versa. The story told here, then, applies to any weak or
              strong ranking.</span
            >
          </transition>
          ranks candidates cannot satisfy unanimity, nondictatorship, and
          independence of irrelevant alternatives at the same time. Mathematics
          refers to this bleak conclusion as Arrow&rsquo;s theorem.<sup
            @click="toggleFootnote(4)"
            class="article__body--footnote-link"
            >4</sup
          >
          <transition name="fade">
            <span v-if="footnoteIsOpen[4]" class="article__body--footnote"
              >Named, of course, after the same Kenneth Arrow from before.</span
            >
          </transition>
        </p>

        <p class="article__body">
          In practice, voting systems usually break independence of irrelevant
          alternatives. As the city of Thunder Bay learned at its foundation,
          first-past-the-post certainly does. But do not lose all hope – though
          no perfect system exists, some systems break only rarely, and we do
          have
          <a
            href="https://en.wikipedia.org/wiki/Bayesian_regret"
            target="_blank"
            class="article__body--link"
            style="margin-right: 0.2rem"
            >ways to</a
          >
          <a
            href="http://zesty.ca/voting/sim/"
            target="_blank"
            class="article__body--link"
            >measure</a
          >
          which voting systems work better than others.
        </p>

        <p class="article__body">
          Like the ancient plateaus overlooking the shores of Thunder Bay, many
          truths transcend human scales. Mathematics provides deep insight into
          the structure of the universe, helping to reveal these majestic laws.
          But Arrow&rsquo;s theorem, while embedded in that beautiful structure,
          really says something that is on a human scale. It&rsquo;s so familiar
          a truth to us that it may even bring us comfort to hear. Arrow&rsquo;s
          theorem tells us we will never make everyone happy. People will always
          disagree, someone will always lose, and someone will always win. Human
          society isn&rsquo;t perfect and can never be. But that&rsquo;s okay:
          in utopia, no one ever invents, no one thinks more than they need to.
          Problems drive innovation, and if we don&rsquo;t have any, the human
          race will stagnate. Stability breeds stability, but who knows what
          wonders chaos may bring.
        </p>
      </section>

      <section id="article-info" class="article__info-container">
        <p class="article__info">
          This article was adapted from a lecture I gave to the Virginia Tech
          MAA math club on October 18, 2018. The informal proof of Arrow&rsquo;s
          theorem is based heavily on the proof given on
          <a
            href="https://web.archive.org/web/20190903062708/https://en.wikipedia.org/wiki/Arrow's_impossibility_theorem"
            target="_blank"
            class="article__body--link"
            >the Wikipedia page</a
          >, but with significant influences and background gathered from other
          sources. The lecture also contained information about alternative
          voting systems and how to effectively compare voting systems, but that
          has been abbreviated here for brevity&rsquo;s sake.
        </p>
      </section>
    </article>
  </Article>
</template>

<script>
import Article from "../views/article.vue";
import Eqn from "../components/eqn.vue";

export default {
  components: {
    Article,
    Eqn
  },
  metaInfo: function() {
    return {
      title: "There Is No Perfect Voting System, and I’ll Prove It to You",
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
      footnoteIsOpen: []
    };
  },
  methods: {
    toggleFootnote: function(index) {
      this.$set(this.footnoteIsOpen, index, !this.footnoteIsOpen[index]);
    }
  }
};
</script>
