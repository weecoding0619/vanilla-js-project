const quotes = [
  {
      quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
      author: "Walt Disney"
  },
  {
      quote: "Life is What Happens To You While You're Busy Making Other Plans.",
      author: "John Lennon"
  },
  {
      quote: "The world is a book, and those who do not travel read only one page.",
      author: "Saint Augustine"
  },
  {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller"
  },
  {
      quote: "To Travel is to Live.",
      author: "Hans Christian Andersen"
  },
  {
      quote: "When they go low, we go high.",
      author: "Michelle Obama"
  },
  {
      quote: "I was never less alone than when by myself.",
      author: "Edward Gibbon"
  },
  {
      quote: "Seeing is believing.",
      author: "Thomas Fuller"
  },
  {
      quote: "The will of man is his happiness.",
      author: "Friedrich von schiller"
  },
  {
      quote: "Only I can change my life, no one can do it for me.",
      author: "Carol Burnett"
  }
];


const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = '"'+todaysQuote.quote+'"';
author.innerText = "-"+todaysQuote.author;


const colors = [
    "#d5d6ea",
    "#f6f6eb",
    "#d7ecd9",
    "#f5d5cb",
    "#f6ecf5",
    "#f3ddf2"
  ];

const quoteAll = document.querySelector('.quote');

const color = colors[Math.floor(Math.random() * colors.length)];
quoteAll.style.background = color;