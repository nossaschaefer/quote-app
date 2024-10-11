const main = document.querySelector("main");
const paragraphQuote = document.querySelector("#quote");
const paragraphAuthor = document.querySelector("#author");
const button = document.querySelector("button");

// function getQuote() {
//   fetch("https://dummy-apis.netlify.app/api/quote")
//     .then((response) => {
//       // console.log(response.status);
//       // console.log(response.url);
//       return response.json();
//     })
//     .then((data) => {
//       paragraphQuote.textContent = data.quote;
//       paragraphAuthor.textContent = "- " + data.author;
//     });
// }

// inzwischen üblicher als fetch
async function getQuote() {
  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/quote");
    const data = await response.json();
    paragraphQuote.textContent = data.quote;
    paragraphAuthor.textContent = "- " + data.author;
  } catch (err) {
    console.log("error");
  }
}

button.addEventListener("click", getQuote);

window.onload = function () {
  paragraphQuote.innerHTML = "1. Make it work <br> 2. Make it work better";
  paragraphAuthor.textContent = "- Nico";
};
