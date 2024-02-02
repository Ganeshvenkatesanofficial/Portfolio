import { getCountries } from "./api.js";
import { displayCountries } from "./display.js";
import { filterCountries } from "./filter.js";
import { searchCountries } from "./search.js";
import { countryHTML } from "./countries.js";
import { createFilter } from "./createFilter.js";
import { expand } from "./item.js";
import { detailedHTML } from "./detailedHTML.js";
import { changeTheme } from "./theme.js";

if (localStorage.getItem("theme")) {
  const theme = document.getElementById("theme");
  const themeButton = document.querySelector(".dark-mode");
  theme.attributes.href.textContent = localStorage.getItem("theme");
  themeButton.querySelector("p").textContent =
    localStorage.getItem("theme-button");
}

// Selecting input element to retrieve data

const form = document.querySelector("#get-options");
const filter = document.getElementById("filter");

form.addEventListener("submit", handleGetCountries);
filter.addEventListener("change", handleFilterCountries);

function handleGetCountries(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let userInput = formData.get("country").toLowerCase();
  try {
    searchCountries(countriesData, userInput, countryHTML);
    expandCountry();
  } catch (error) {
    alert(error.message);
  }
}

function handleFilterCountries(event) {
  event.preventDefault();
  const selection = event.target.value.toLowerCase();
  try {
    filterCountries(countriesData, selection, countryHTML);
    expandCountry();
  } catch {
    console.log(error);
  }
}

const countriesData = await getCountries();
displayCountries(countriesData, countryHTML);
createFilter(countriesData);

function expandCountry() {
  const countries = document.querySelectorAll(".country");
  countries.forEach((country) => {
    country.addEventListener("click", handleExpand);
  });
}

expandCountry();

function handleExpand(event) {
  const country =
    event.currentTarget.querySelector(".country-name").attributes["data-value"]
      .textContent;
  expand(countriesData, country, detailedHTML);
}

const themeButton = document.querySelector(".dark-mode");
themeButton.addEventListener("click", changeTheme);
