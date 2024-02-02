export function displayCountries(data, html) {
  const result = document.querySelector(".result");

  for (let key in data) {
    const getCountry = html(data, key);
    result.innerHTML += getCountry;
  }
}
