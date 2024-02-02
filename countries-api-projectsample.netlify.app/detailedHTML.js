export function detailedHTML(data, key) {
  const country = data[key];
  const countryNameKey = country.name.nativeName
    ? Object.keys(country.name.nativeName)
    : null;
  const countryCurrencyKey = country.currencies
    ? Object.keys(country.currencies)
    : null;
  const countryLanguageKey = country.languages
    ? Object.keys(country.languages)
    : null;
  return `
<div class="detailed-country wrapper">
    <img src="${country.flags.png}" alt="${
    country.name.common
  } flag" id="country-flag">
    <div class="detailed-info">
        <div class="detailed-country-name" data-value="${
          country.name.common
        }">${country.name.common}${
    country.name.official === country.name.common
      ? ""
      : `, also known as ${country.name.official}`
  }</div>
        <div class="detailed-information">
            <div class="detailed-country-info">
                <p class="detailed-native-name"><span class="detailed">Native name:</span> ${
                  countryNameKey !== null
                    ? countryNameKey
                        .map((key) => country.name?.nativeName[key].common)
                        .join(", or ")
                    : "N/A"
                }</p>
                <p class="detailed-population"><span class="detailed">Population:</span> ${country.population.toLocaleString(
                  "en-US"
                )}</p>
                <p class="detailed-region"><span class="detailed">Region:</span> ${
                  country.region === undefined ? "N/A" : country.region
                }</p>
                <p class="detailed-subregion"><span class="detailed">Sub region:</span> ${
                  country.subregion === undefined ? "N/A" : country.subregion
                }</p>
                <p class="detailed-capital"><span class="detailed">Capital:</span> ${
                  country.capital === undefined ? "N/A" : country.capital
                }</p>
            </div>
            <div class="detailed-additional-info">
                <p class=""><span class="detailed">Top Level Domain:</span> ${country?.tld.join(
                  ", "
                )}</p>
                <p class=""><span class="detailed">Currencies:</span> ${
                  countryCurrencyKey !== null
                    ? countryCurrencyKey
                        .map((key) => country?.currencies[key].name)
                        .join(", ")
                    : "N/A"
                }</p>
                <p class=""><span class="detailed">Languages:</span> ${
                  countryLanguageKey !== null
                    ? countryLanguageKey
                        .map((key) => country.languages[key])
                        .join(", ")
                    : "N/A"
                }</p>
            </div>
        </div>
    </div>
</div>
`;
}
