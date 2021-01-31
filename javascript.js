const quotes = [
 {
   quote: "Waste no more time arguing what a good man should be. Be One.",
   name: "Marcus Aurelius",
   image: "marcus"
 },
 {
   quote: "You could leave life right now. Let that determine what you do and say and think.",
   name: "Marcus Aurelius",
   image: "seneca1" 
 },
 {
  quote: "He who fears death will never do anything worth of a man who is alive.",
  name: "Seneca",
  image: "seneca" 
},
{
  quote: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
  name: "Seneca",
  image: "seneca2" 
},
{
  quote: "How long are you going to wait before you demand the best for yourself?",
  name: "Epictetus",
  image: "epictetus" 
},
{
  quote: "Don’t explain your philosophy. Embody it.",
  name: "Epictetus",
  image: "epictetus1" 
},
{
  quote: "You have power over your mind — not outside events. Realize this, and you will find strength.",
  name: "Marcus Aurelius",
  image: "marcus1" 
},
{
  quote: "Hang on to your youthful enthusiasms — you’ll be able to use them better when you’re older.",
  name: "Seneca",
  image: "seneca3" 
},
{
  quote: "Wealth consists not in having great possessions, but in having few wants.",
  name: "Epictetus",
  image: "epictetus2" 
},
{
  quote: "If it is not right, do not do it; if it is not true, do not say it. ",
  name: "Marcus Aurelius",
  image: "marcus2" 
},
];

const button_1 = document.getElementById("button_1");
const quoteTxt = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quoteImage = document.querySelector("#quoteImage")

button_1.addEventListener("click", newQuote);

function newQuote() {
    let number = Math.floor(Math.random() * quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    quoteImage.setAttribute("class", quotes[number].image);
 }
