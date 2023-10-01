// Date
const date = new Date();
const year = date.getFullYear();

const html_year = document.getElementById("year");

html_year.innerHTML = year;

// last modified
const html_lastModified = document.getElementById("lastModified");

// console.log(document.lastModified);
html_lastModified.innerHTML = "Last Modified: " + document.lastModified;
