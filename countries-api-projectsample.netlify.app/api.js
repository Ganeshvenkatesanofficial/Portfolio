export async function getCountries() {
  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.message) {
      throw {
        message: "Something went wrong...",
      };
    }
    return data;
  } catch (error) {
    result.innerHTML = error.message;
  }
}
