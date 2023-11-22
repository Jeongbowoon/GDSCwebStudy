const quotes = [
    {
        quote:"WHat do you want a meaning for? Life is a desire, not a meaning.",
        author: "Clarlie Chaplin",
    },
    {
        quote:"Life is just one damned thing after another.",
        author: "Elbert Hubbard",
    },
    {
        quote:"About the only thing that comes to us without effort is old age.",
        author: "Gloria Pitzer",
    },
    {
        quote:"True life is lived when tiny changes occur.",
        author: "Leo Tolstoy",
    },
    {
        quote:"Each of us visits this Earth involuntarily, and without an invitation. For me, it is enough to wonder at the secrets.",
        author: "Albert Einstein",
    },
    {
        quote:"Youth cannot know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
        author: "J. K. Rowling",
    },
    {
        quote:"To be mature means to face, and not evade, every fresh crisis that comes.",
        author: "Fritz Kunkel",
    },
    {
        quote:"Children are the only form of immortality that we can be sure of.",
        author: "Havelock Ellis",
    },
    {
        quote:"Life is a tragedy when seen in close-up, but a comedy in long-shot.",
        author: "Charlie Chaplin",
    },

    {
        quote:"Life's a voyage that's homeward bound.",
        author: "Herman Melville",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child")

const todayQuote = quotes[Math.floor(Math.random()*10)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;