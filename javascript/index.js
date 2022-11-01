// // Los Angeles v1
// setInterval(function () {
//   let losAngelesElement = document.querySelector("#los-angeles");
//   let losAngelesDateElement = losAngelesElement.querySelector(".date");
//   let losAngelesTimeElement = losAngelesElement.querySelector(".time");
//   let losAngelesTime = moment().tz("America/Los_Angeles");
//   losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
//   losAngelesTimeElement.innerHTML = losAngelesTime.format(
//     "h:mm:ss [<small>]A[</small>]"
//   );
// }, 1);

// // Paris v2
// function updateParisTime() {
//   let parisElement = document.querySelector("#paris");
//   let parisDateElement = parisElement.querySelector(".date");
//   let parisTimeElement = parisElement.querySelector(".time");
//   let parisTime = moment().tz("Europe/Paris");
//   parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
//   parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
// }
// updateParisTime();
// setInterval(updateParisTime, 1);

function updateTime() {
  //   // Los Angeles
  //   let losAngelesElement = document.querySelector("#los-angeles");
  //   if (losAngelesElement) {
  //     let losAngelesDateElement = losAngelesElement.querySelector(".date");
  //     let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  //     let losAngelesTime = moment().tz("America/Los_Angeles");
  //     losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  //     losAngelesTimeElement.innerHTML = losAngelesTime.format(
  //       "h:mm:ss [<small>]A[</small>]"
  //     );
  //   }
  //   // Paris
  //   let parisElement = document.querySelector("#paris");
  //   if (parisElement) {
  //     let parisDateElement = parisElement.querySelector(".date");
  //     let parisTimeElement = parisElement.querySelector(".time");
  //     let parisTime = moment().tz("Europe/Paris");
  //     parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  //     parisTimeElement.innerHTML = parisTime.format(
  //       "h:mm:ss [<small>]A[</small>]"
  //     );
  //   }

  // current
  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentDateElement = currentElement.querySelector(".date");
    let currentTimeElement = currentElement.querySelector(".time");
    let currentLocationElement = currentElement.querySelector(".location");
    let currentLocation = moment.tz.guess();
    let currentTimeZone = moment().tz(currentLocation);
    currentDateElement.innerHTML = currentTimeZone.format("MMMM Do YYYY");
    currentTimeElement.innerHTML = currentTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    currentLocationElement.innerHTML = `I am in ${
      currentLocation.replace("_", " ").split("/")[1]
    }`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `        
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
