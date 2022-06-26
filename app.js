"use strict";

//Add Dom Elements
const displayDay = document.querySelector(".day");
const displayDate = document.querySelector(".date");
const displayTime = document.querySelector(".time");

//Declare variables
let date;
let hours;
let minutes;
let meridiem;

//Declare arrays
//Days of the week
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

//Months of the year
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Get time function
//Gets the time every 60 (60000) seconds and updates DOM elements
const getTime = () => {
  //get the new date
  date = new Date();

  //add a zero if minutes are less than double digit (10)
  if (date.getMinutes() < 10) {
    minutes = `0${date.getMinutes()}`;
  } else {
    minutes = date.getMinutes();
  }

  //get the meridiem if the 24 hour is equal to 12 or greater.
  //AM PM
  if (date.getHours() >= 12) {
    meridiem = `PM`;
  } else {
    meridiem = `AM`;
  }

  //Change the background image according to the hour of the day.
  //Testing Background function
  // changeBackground(11);

  changeBackground(date.getHours());

  //Update the DOM with the time.
  displayDay.textContent = days[date.getDay()];
  displayDate.textContent = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} `;
  displayTime.textContent = `${
    ((date.getHours() + 11) % 12) + 1
  }:${minutes} ${meridiem}`;
  // displayDate.innerHTML = currentTime;
};

//Change background function
//Changes the background image css based on what 24 hour it is.
const changeBackground = (hour) => {
  if (hour > 5 && hour <= 10)
    document.body.style.backgroundImage = "url('assets/imgs/sunrise.jpg')";

  if (hour >= 11 && hour <= 16)
    document.body.style.backgroundImage = "url('assets/imgs/afternoon.jpg')";

  if (hour >= 17 && hour <= 19)
    document.body.style.backgroundImage = "url('assets/imgs/evening.jpg')";

  if (hour >= 20 && hour <= 21)
    document.body.style.backgroundImage = "url('assets/imgs/night.jpg')";

  if (hour >= 22 || hour <= 5)
    document.body.style.backgroundImage = "url('assets/imgs/midnight.jpg')";
};

//Run get time during initialization
getTime();

//Run get time every 60 (60000) seconds.
setInterval(getTime, 60000);
