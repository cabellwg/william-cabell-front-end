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
      text:
        "That would have been plenty humiliating without the goodnight kiss.",
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
    }
  ];

  static getRandomQuote() {
    let index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}
