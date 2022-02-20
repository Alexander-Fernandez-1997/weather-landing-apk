const cityname = document.getElementById("cityname");
const diaactual = document.getElementById("diaactual");
const clima = document.getElementById("clima");
const temp = document.getElementById("temp");
const form = document.getElementById("form");
const icononice = document.querySelector(".icononice");
const body = document.querySelector("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city1 = document.querySelector(".flex-grow-1");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city1.value}&appid=b765b6d0d70c278126e0597fa5b4f037&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      cityname.innerText = data.name;
      temp.innerText = data.main.temp;
      icononice.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      clima.innerText = data.weather[0].description;
      const today = new Date();
      const localOffset = data.timezone + today.getTimezoneOffset() * 60;
      const localDate = new Date(today.setUTCSeconds(localOffset));
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDate = localDate.toLocaleDateString("en-US", options);
      diaactual.innerText = formattedDate;
      body.style.backgroundImage = `url(
        http://source.unsplash.com/1600x900/?${city1.value})`;
    });
});
