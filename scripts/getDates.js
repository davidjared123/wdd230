const date = new Date();
const year = date.getFullYear();

const html_year = document.getElementById("year");

html_year.innerHTML = year;

// const lastModified = new Date(document.lastModified);
const modified = "";

const html_lastModified = document.getElementById("lastModified");

const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${
    Date.now().getFullYear
  }; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;

  if (isFinite(lastVisit)) {
    // html_lastModified.innerHTML = "Last modified: " + document.cookie.cookie1;
    console.log(document.cookie.getFullYear);
  }
}
