const toggle = document.querySelector(".toggle");

const menu = document.querySelector(".menu");

const items = document.querySelectorAll(".item");

 

/* Toggle mobile menu */

function toggleMenu() {

  if (menu.classList.contains("active")) {

    menu.classList.remove("active");

    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";

  } else {

    menu.classList.add("active");

    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";

  }

}

 

/* Activate Submenu */

function toggleItem() {

  if (this.classList.contains("submenu-active")) {

    this.classList.remove("submenu-active");

  } else if (menu.querySelector(".submenu-active")) {

    menu.querySelector(".submenu-active").classList.remove("submenu-active");

    this.classList.add("submenu-active");

  } else {

    this.classList.add("submenu-active");

  }

}

 

/* Close Submenu From Anywhere */

function closeSubmenu(e) {

  let isClickInside = menu.contains(e.target);

 

  if (!isClickInside && menu.querySelector(".submenu-active")) {

    menu.querySelector(".submenu-active").classList.remove("submenu-active");

  }

}

/* Event Listeners */

toggle.addEventListener("click", toggleMenu, false);

for (let item of items) {

  if (item.querySelector(".submenu")) {

    item.addEventListener("click", toggleItem, false);

  }

  item.addEventListener("keypress", toggleItem, false);

}

document.addEventListener("click", closeSubmenu, false);


/*Button Toggle*/

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/************Weather API************************

// SELECT ELEMENTS
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

// App data
const weather = {};

weather.temperature = {
  unit: "fahrenheit",
};

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
//getting data
  fetch(api)
    .then(function (response) {  //promise //transforming data into something workable
      let data = response.json();
      return data;
    })
    .then(function (data) { //pop obj with data
      weather.temperature.value = Math.floor(
        1.8 * (data.main.temp - KELVIN) + 32 //took a while to get right
      );
      weather.description = data.weather[0].description.toUpperCase();
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

// DISPLAY WEATHER TO UI
function displayWeather() {
  tempElement.innerHTML = `${weather.temperature.value}°F`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

/**********End Weather API**********************/




/***********Recreation Site API*****************/



/*****************End Recreation API*****************/





/***********Dive Site API*****************/



/*****************End Dive Site API*****************/
