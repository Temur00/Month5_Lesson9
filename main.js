const date = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};
const date3 = date.toLocaleDateString("en-IN", options);
document.getElementById("formattedDate").innerHTML += date3;

var clock = new Date();
var current_time =
  date.getHours() + ":" + clock.getMinutes() + ":" + clock.getSeconds();
document.getElementById("clock").innerHTML = current_time;
