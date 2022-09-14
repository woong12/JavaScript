const quotes = [
    {
        quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
        author: "Barbara Bush",
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr.",
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "A mind troubled by doubt cannot focus on the course of victory.",
        author: "Arthur Golden",
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "The way to get started is to quit talking and begin doing. ",
        author: "Walt Disney",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "Opportunities don’t happen. You create them.",
        author: "Chris Grosser",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
