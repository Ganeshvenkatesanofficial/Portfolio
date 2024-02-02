export function expand(data, country, html) {
  const theme = document.getElementById("theme");
  const themeButton = document
    .querySelector(".dark-mode")
    .querySelector("p").textContent;
  let storedData;
  for (let key in data) {
    const APIcountry = data[key].name.common;
    APIcountry === country ? (storedData = html(data, key)) : null;
  }
  localStorage.setItem("myData", storedData);
  localStorage.setItem("theme", theme.attributes.href.textContent);
  localStorage.setItem("theme-button", themeButton);
  window.location.href = "./details.html";
}
