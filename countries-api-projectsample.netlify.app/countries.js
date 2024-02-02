export function countryHTML(data, key) {
  const country = data[key];
  return `
<div class="country">
<img src="${country.flags.png}" alt="${
    country.name.common
  } flag" id="country-flag">
<div class="country-name" data-value="${country.name.common}">${
    country.name.common
  }${
    country.name.official === country.name.common
      ? ""
      : `, also known as ${country.name.official}`
  }</div>
<div class="country-info">
    <p class="population">Population: ${country.population.toLocaleString(
      "en-US"
    )}</p>
    <p class="region">Region: ${country.region}</p>
    <p class="capital">Capital: ${
      country.capital === undefined ? "N/A" : country.capital
    }</p>
</div>
`;
}
