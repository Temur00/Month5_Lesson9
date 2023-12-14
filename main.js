const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const date3 = date.toLocaleDateString("en-IN", options);
document.getElementById("formattedDate").innerHTML += date3;

const stopBtn = document.querySelector(".stop");
const clock = document.getElementById("clock");

let stopTimeout = setTimeout(() => {
  console.log("3000");
}, 3000);

let stopInterval = setInterval(() => {
  // console.log(new Date().toLocaleTimeString('it-IT'));
  clock.innerHTML = new Date().toLocaleTimeString("it-IT");
}, 1000);
