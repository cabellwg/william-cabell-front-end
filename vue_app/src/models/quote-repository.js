export default class QuoteRepository {
  static quotes = [
    {
      text:
        "Write your code as if the person who will end up maintaining it is a violent psychopath with your home address.",
      source: "Reddit"
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
      source: "Overheard in a D.C. bar"
    },
    {
      text:
        "This is how humans are: we question all our beliefs, except for the ones that we really believe in, and those we never think to question.",
      source: "Ender, Speaker for the Dead"
    },
    {
      text: "I should feel scared. But I don't.",
      source: "Randall Munroe",
      link: "https://xkcd.com/266/"
    },
    {
      text:
        "The purpose of life is finding the largest burden that you can bear and bearing it.",
      source: "Jordan Peterson"
    },
    {
      text: "Happiness equals reality minus expectations.",
      source: "Tom Magliozzi, Car Talk"
    },
    {
      text: "It depends on what the meaning of the word “is” is.",
      source: "President Bill Clinton"
    },
    {
      text: "I hear there's rumors on the Internets.",
      source: "President George W. Bush"
    },
    {
      text:
        "Stop being reasonable. You can't do that here, this is the internet. Act accordingly!",
      source: "[REDACTED], tweeted by @SeargeDP",
      link: "https://twitter.com/SeargeDP/status/476619831232708608"
    },
    {
      text: "Cogito ergo sum.",
      source: "Descartes"
    },
    {
      text: "To be is to do.",
      source: "Socrates"
    },
    {
      text: "To do is to be.",
      source: "Jean-Paul Sartre"
    },
    {
      text:
        "The happiness of your life depends upon the quality of your thoughts.",
      source: "Marcus Aurelius"
    },
    {
      text: "Wallace! Amazon.ca, what's the website for that?",
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
      text: "They're just there, like old creatures everyone's forgotten.",
      source: "Herschel, Gemini"
    },
    {
      text: "I'm going to stand here and be myself, no matter what.",
      source: "Herschel, Gemini"
    },
    {
      text: "I always keep my watch three hours and twenty-five minutes fast.",
      source: "Doris, Same Time, Next Year"
    },
    {
      text:
        "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
      source: "Tyrion Lannister, Game of Thrones"
    },
    {
      text: "I've always loathed the necessity of sleep.",
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
        "Odious ideas are not entitled to hide from criticism behind the human shield of their believers' feelings.",
      source: "Richard Stallman",
      link: "http://www.stallman.org/sayings.html"
    },
    {
      text:
        "No one in the world ever gets what they want, and that is beautiful.",
      source: "Don't Let's Start, They Might Be Giants"
    },
    {
      text: 'alias cd="sudo rm -rf / --no-preserve-root"',
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
      text: "Don't see it?  Tilt your head to the left 90 degrees.",
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
      source: "G.H. Hardy, A Mathematician's Apology"
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
    }
  ];

  static getRandomQuote() {
    let index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}
