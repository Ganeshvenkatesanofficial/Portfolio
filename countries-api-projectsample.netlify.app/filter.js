export function filterCountries(data, selection, html) {
  const result = document.querySelector(".result");
  result.innerHTML = "";

  for (let key in data) {
    if (selection === data[key].region.toLowerCase()) {
      const countries = html(data, key);
      result.innerHTML += countries;
    }
  }
}
