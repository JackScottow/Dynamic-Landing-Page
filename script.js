const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const greetingDayPart = document.getElementById("dayPart");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
const setTime = document.getElementById("setTime");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM"; // AM or PM

  hour = hour % 12 || 12;

  time.innerHTML = hour + ":" + addZero(min) + ":" + addZero(sec) + " " + amPm;
  dayPart();

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

function dayPart() {
  let today = new Date();
  let hour = today.getHours();
  const favicon = document.getElementById("favicon");

  if (hour < 12) {
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    document.body.style.color = "black";
    greeting.innerText = "Good Morning";
    greetingDayPart.innerText = "today?";
    document.title = "Good Morning" + " " + name.innerText;
    favicon.href = "favicons/morning.png";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    document.body.style.color = "black";
    greeting.innerText = "Good Afternoon";
    greetingDayPart.innerText = "this afternoon?";
    document.title = "Good Afternoon" + " " + name.innerText;
    favicon.href = "favicons/afternoon.ico";
  } else {
    document.body.style.backgroundImage = "url('img/night.jpg')";
    document.body.style.color = "white";
    greeting.innerText = "Good Evening";
    greetingDayPart.innerText = "this evening?";
    document.title = "Good Evening" + " " + name.innerText;
    favicon.href = "favicons/evening.ico";
  }
}

function getName() {
  if (localStorage.getItem("name") === "" || localStorage.getItem("name") === null) {
    name.innerText = "[Enter Name]";
  } else {
    name.innerText = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === "" || localStorage.getItem("focus") === null) {
    focus.innerText = "[Enter Focus]";
  } else {
    focus.innerText = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
getName();
getFocus();
