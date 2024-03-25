let cityName = document.querySelector("h1");
let temperature = document.querySelector("h2");
let desc = document.querySelector(".description");
let icon = document.querySelector("img");
let city = "";
function handleSearch(event) {
  event.preventDefault();
  let city = document.querySelector("input").value;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5acff9b90a46f05d48707b36deab32a2&units=metric`
    )
    .then((res) => {
      console.log(res.data);
      icon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      );
      cityName.textContent = res.data.name;
      temperature.textContent = Math.round(res.data.main.temp) + "°c";
      desc.textContent = res.data.weather[0].main;
      document.querySelector("input").value = "";
    })
    .catch((err) => console.log(err));
}

addEventListener("DOMContentLoaded", (event) => {
  navigator.geolocation.getCurrentPosition((position) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=5acff9b90a46f05d48707b36deab32a2&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        icon.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        );
        cityName.textContent = res.data.name;
        temperature.textContent = Math.round(res.data.main.temp) + "°c";
        desc.textContent = res.data.weather[0].main;
        document.querySelector("input").value = "";
      })
      .catch((err) => console.log(err));
  });
});
