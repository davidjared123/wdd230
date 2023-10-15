Date;
const date = new Date();
const year = date.getFullYear();

const html_year = document.getElementById("year");

html_year.innerHTML = year;

// last modified
const html_lastModified = document.getElementById("lastModified");

// console.log(` last modified: ${document.lastModified}`);
html_lastModified.innerHTML = "Last Modified: " + document.lastModified;
let days = 0;
let localDate = localStorage.getItem("date");

if (localDate) {
  const date_comparation = new Date("2016-07-12").getTime();

  const diff = localDate - date_comparation;
  days = diff / 24;

  const newDate = new Date("2016-07-12").getTime();
  localStorage.setItem("date", newDate);
} else {
  const newDate = new Date("2016-07-12").getTime();
  localStorage.setItem("date", newDate);
}
console.log(localDate);
/// adding counter
// 1️⃣ Initialize display element variable
// const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

let message = "";
// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  message = `You last visited ${days} days ago.`;
  html_lastModified.textContent = message;
} else {
  message =
    "Welcome! Let us know if you have any questions. Back so soon! Awesome!.";
  html_lastModified.textContent = message;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

const closer = document.querySelector(".close");
const nav = document.querySelector(".lastModified");
closer.addEventListener("click", () => {
  nav.classList.add("dalate");
});
