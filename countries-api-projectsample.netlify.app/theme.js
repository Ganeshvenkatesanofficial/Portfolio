export const changeTheme = () => {
  const theme = document.getElementById("theme");
  const darkTheme = "./styles/dark.css";
  const lightTheme = "./styles/light.css";
  const themeButton = document.querySelector(".dark-mode").querySelector("p");
  let currentTheme = theme.attributes.href.textContent;
  if (currentTheme === lightTheme) {
    theme.href = darkTheme;
    currentTheme = darkTheme;
    themeButton.textContent = "Light mode";
    localStorage.setItem("theme", darkTheme);
    localStorage.setItem("theme-button", "Light mode");
  } else {
    theme.href = lightTheme;
    currentTheme = lightTheme;
    themeButton.textContent = "Dark mode";
    localStorage.setItem("theme", lightTheme);
    localStorage.setItem("theme-button", "Dark mode");
  }
};
