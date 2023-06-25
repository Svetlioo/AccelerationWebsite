"use strict";
// Variables
const car1 = document.querySelector(".car1");
const car2 = document.querySelector(".car2");
const timeInput1 = document.getElementById("time-input-car1");
const timeInput2 = document.getElementById("time-input-car2");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const reset = document.getElementById("reset-button");
const cars = document.querySelector(".car");
let winner;
let time1;
let time2;

// Functions
const resetAnimation = function () {
  cars.style.animationFillMode = "";
  car1.style.animationName = "";
  car2.style.animationName = "";
};

const cancelSubmitButton = submitButton.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
  }
);

const startRace = function () {
  time1 = timeInput1.value;
  time2 = timeInput2.value;

  car1.style.animationDuration = `${time1}s`;
  car2.style.animationDuration = `${time2}s`;
  car1.style.animationName = "race1";
  car2.style.animationName = "race2";
  car1.style.display = "block";
  car2.style.display = "block";
  result.textContent = "Race started!";
};

// Start of code
submitButton.addEventListener("click", startRace);

car1.addEventListener("animationend", function () {
  if (Number(time1) < Number(time2)) {
    winner = "Car 1";
    result.textContent = `${winner} won the race!`;
    submitButton.addEventListener("click", function () {
      result.textContent = "Press reset";
    });
  }
});

car2.addEventListener("animationend", function () {
  if (Number(time1) > Number(time2)) {
    winner = "Car 2";
    result.textContent = `${winner} won the race!`;
    submitButton.addEventListener("click", function () {
      result.textContent = "Press reset";
    });
  }
});

reset.addEventListener("click", function () {
  // car1.style.display = "none";
  // car2.style.display = "none";
  // car1.style.classList.remove("animationName");
  resetAnimation();
  result.textContent = "Enter again!";
  timeInput1.value = "";
  timeInput2.value = "";
  submitButton.addEventListener("click", function () {
    result.textContent = "Race started!";
  });
});

// Car data
let currentCar1;
let currentCar2;
const carData = [
  {
    name: "Audi RS7",
    accelerationTo100: 3.6,
    horsepower: 560,
    engineDisplacement: "4.0L",
    quarterMile: 11.6,
  },
  {
    name: "Mercedes C63",
    accelerationTo100: 4.0,
    horsepower: 503,
    engineDisplacement: "4.0L",
    quarterMile: 12.2,
  },
  {
    name: "VW GOLF IV",
    accelerationTo100: 9.7,
    horsepower: 115,
    engineDisplacement: "1.6L",
    quarterMile: 17.5,
  },
  {
    name: "BMW 335 XI",
    accelerationTo100: 4.8,
    horsepower: 300,
    engineDisplacement: "3.0L",
    quarterMile: 13.4,
  },
  {
    name: "TESLA 1020HP",
    accelerationTo100: 2.3,
    horsepower: 1020,
    engineDisplacement: "N/A",
    quarterMile: 9.8,
  },
  {
    name: "Lambo SVJ",
    accelerationTo100: 2.8,
    horsepower: 759,
    engineDisplacement: "6.5L",
    quarterMile: 10.5,
  },
  {
    name: "Bugatti Chiron",
    accelerationTo100: 2.4,
    horsepower: 1500,
    engineDisplacement: "8.0L",
    quarterMile: 9.4,
  },
  {
    name: "Toyota Prius",
    accelerationTo100: 10.6,
    horsepower: 121,
    engineDisplacement: "1.8L",
    quarterMile: 17.6,
  },
  {
    name: "Koenigsegg Jesko",
    accelerationTo100: 2.5,
    horsepower: 1600,
    engineDisplacement: "5.0L",
    quarterMile: 9.7,
  },
  {
    name: "Nissan GT-R",
    accelerationTo100: 2.7,
    horsepower: 600,
    engineDisplacement: "3.8L",
    quarterMile: 11.0,
  },
];

function getAccelerationTo100ByName(name) {
  for (let i = 0; i < carData.length; i++) {
    if (carData[i].name === name) {
      return carData[i].accelerationTo100;
    }
  }
}

function getAccelerationQuarterMileByName(name) {
  for (let i = 0; i < carData.length; i++) {
    if (carData[i].name === name) {
      return carData[i].quarterMile;
    }
  }
}

// Car selector
const dropdown1 = document.querySelectorAll(".dropdown1");

dropdown1.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      console.log(option.textContent);
      if (currentMode == "0-100") {
        timeInput1.value = getAccelerationTo100ByName(option.textContent);
      } else if (currentMode == "QuarterMile") {
        timeInput1.value = getAccelerationQuarterMileByName(option.textContent);
      }
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

const dropdown2 = document.querySelectorAll(".dropdown2");

dropdown2.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      console.log(option.textContent);
      if (currentMode == "0-100") {
        timeInput2.value = getAccelerationTo100ByName(option.textContent);
      } else if (currentMode == "QuarterMile") {
        timeInput2.value = getAccelerationQuarterMileByName(option.textContent);
      }
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

let currentMode = "0-100";
const labelCar1 = document.getElementById("car-1-label");
const labelCar2 = document.getElementById("car-2-label");
const mode = document.getElementById("mode-button");
mode.addEventListener("click", function () {
  if (currentMode == "0-100") {
    labelCar1.textContent = "Car 1 Quarter Mile (in seconds):";
    labelCar2.textContent = "Car 2 Quarter Mile (in seconds):";
    currentMode = "QuarterMile";
    mode.textContent = "QuarterMile";
    return;
  } else if (currentMode == "QuarterMile") labelCar1.textContent = "Car 1 0-100 km/h (in seconds):";
  labelCar2.textContent = "Car 2 0-100 km/h (in seconds):";
  currentMode = "0-100";
  mode.textContent = "0 - 100 km/h";
  return;
});

console.log(currentCar);
