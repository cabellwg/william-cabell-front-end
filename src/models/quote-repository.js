export default class QuoteRepository {
  static quotes = [
    {
      text:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      source: "John F. Woods",
      link:
        "https://groups.google.com/forum/#!msg/comp.lang.c++/rYCO5yn4lXw/oITtSkZOtoUJ"
    },
    {
      text:
        "We all spend a third of our lives lying down with our eyes closed and no one knows why.",
      source: "Randall Munroe",
      link: "https://xkcd.com/1345/"
    },
    {
      text: "Oh, no reason. I was just curious.",
      source: "Calvin, Calvin & Hobbes"
    },
    {
      text: "Truth is like poetry. And most people fucking hate poetry.",
      source: "Overheard in a D.C. bar by Michael Lewis"
    },
    {
      text:
        "This is how humans are: we question all our beliefs, except for the ones that we really believe in, and those we never think to question.",
      source: "Ender, Speaker for the Dead"
    },
    {
      text: "I should feel scared. But I don&rsquo;t.",
      source: "Randall Munroe",
      link: "https://xkcd.com/266/"
    },
    {
      text: "Happiness equals reality minus expectations.",
      source: "Tom Magliozzi, Car Talk"
    },
    {
      text: "It depends on what the meaning of the word &lsquo;is&rsquo; is.",
      source: "President Bill Clinton"
    },
    {
      text: "I hear there&rsquo;s rumors on the Internets.",
      source: "President George W. Bush"
    },
    {
      text:
        "Stop being reasonable. You can&rsquo;t do that here, this is the internet. Act accordingly!",
      source: "[REDACTED], tweeted by @SeargeDP",
      link: "https://twitter.com/SeargeDP/status/476619831232708608"
    },
    {
      text: "Wallace! Amazon.ca, what&rsquo;s the website for that?",
      source: "Scott Pilgrim, Scott Pilgrim vs. the World"
    },
    {
      text: "Looks like we have a bit of a sticky situation here.",
      source: "Hellstrom, Inglourious Basterds"
    },
    {
      text: "Hamburgers! The corner-stone of any nutritious breakfast.",
      source: "Jules, Pulp Fiction"
    },
    {
      text:
        "They&rsquo;re just there, like old creatures everyone&rsquo;s forgotten.",
      source: "Herschel, Gemini"
    },
    {
      text: "I&rsquo;m going to stand here and be myself, no matter what.",
      source: "Herschel, Gemini"
    },
    {
      text: "I always keep my watch three hours and twenty-five minutes fast.",
      source: "Doris, Same Time, Next Year"
    },
    {
      text: "Only the ladder is real. The climb is all there is.",
      source: "Lord Petyr Baelish, Game of Thrones"
    },
    {
      text: "I&rsquo;ve always loathed the necessity of sleep.",
      source: "Frank Underwood, House of Cards"
    },
    {
      text:
        "We have ICE!!!!! Yes, ICE, *WATER ICE* on Mars! w00t!!! Best day ever!!",
      source: "@MarsPhoenix",
      link: "https://twitter.com/MarsPhoenix/status/839088619"
    },
    {
      text:
        "No one in the world ever gets what they want, and that is beautiful.",
      source: "Don&rsquo;t Let&rsquo;s Start, They Might Be Giants"
    },
    {
      text: 'alias cd="rm -rf"',
      source: "William Cabell"
    },
    {
      text:
        "The distributed intelligence of the web-connected world transcends art.",
      source: "RFC2324",
      link: "https://tools.ietf.org/html/rfc2324"
    },
    {
      text: "Life imitates Art far more than Art imitates Life.",
      source: "Oscar Wilde"
    },
    {
      text: "Don&rsquo;t see it?  Tilt your head to the left 90 degrees.",
      source: "RFC1392",
      link: "https://tools.ietf.org/html/rfc1392"
    },
    {
      text: "Smiles are also used to denote sarcasm.",
      source: "RFC1392",
      link: "https://tools.ietf.org/html/rfc1392"
    },
    {
      text:
        "Real mathematics must be justified as art if it can be justified at all.",
      source: "G.H. Hardy, A Mathematician&rsquo;s Apology"
    },
    {
      text:
        "If one uses the tools of modern algebraic topology, singular homology theory in particular, the proof is quite straightfoward.",
      source: "James Munkres, Topology"
    },
    {
      text:
        "I don’t play accurately – any one can play accurately – but I play with wonderful expression.",
      source: "Algernon, The Importance of Being Earnest"
    },
    {
      text: "What kind of person quotes themselves on their own website?",
      source: "Kendra Song"
    },
    {
      text: "If everyone is thinking alike, someone isn&rsquo;t thinking.",
      source: "Gen. George S. Patton, Jr."
    },
    {
      text: "There&rsquo;s always the risk that there are unknown unknowns.",
      source: "Nate Silver"
    },
    {
      text:
        "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!",
      source: "Ozymandias, Percy Bysshe Shelley",
      link: "https://www.poetryfoundation.org/poems/46565/ozymandias"
    },
    {
      text:
        "I thought those Grapes were ripe, but I see now they are quite sour.",
      source: "The Fox, The Fox and the Grapes",
      link:
        "http://www.gutenberg.org/files/11339/11339-h/11339-h.htm#THE_FOX_AND_THE_GRAPES"
    }
  ];

  static getRandomQuote() {
    let index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}
