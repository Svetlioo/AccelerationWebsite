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
  submitButton.addEventListener("click", function () {
    result.textContent = "Race started!";
  });
});
