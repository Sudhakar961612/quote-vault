"use strict";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const titles = document.getElementById("titles");
const newQuoteButton = document.getElementsByClassName("new-quote-button");

const tweetButton = document.getElementById("tweet-button");

const api_url = "https://api.quotable.io/random";

const getQuote = async (url) => {
  const response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = `${data.author} <i>- Source title <i> ${data.tags[0]} `;
};

const handleByOnClick = () => {
  getQuote(api_url);
};

Array.from(newQuoteButton).forEach((button) => {
  button.addEventListener("click", handleByOnClick);
});

tweetButton.addEventListener("click", () => {
  window.open("https://twitter.com", "_blank");
});

getQuote(api_url);
