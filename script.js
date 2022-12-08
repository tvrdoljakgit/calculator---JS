"use strict";

const allButtons = document.querySelectorAll(".box");
const textDOM = document.querySelector(".text");

let operation = "";
let num = "";
let sumOfAll = 0;

allButtons.forEach((button, indx) => {
  if (indx === 0) {
  } else {
    button.addEventListener("click", function (e) {
      if (button.dataset.id !== "=") {
        operation = operation + button.dataset.id;
        // samo za prikaz na ekran
        num = num + button.dataset.id;
        textDOM.textContent = num;
      }
      if (button.dataset.id === "=") {
        if (
          operation.charAt(operation.length - 1) === "+" ||
          operation.charAt(operation.length - 1) === "-" ||
          operation.charAt(operation.length - 1) === "/" ||
          operation.charAt(operation.length - 1) === "*"
        ) {
          alert("missing number");
        } else {
          sumOfAll = eval(operation);
          textDOM.textContent = sumOfAll;
          operation = "" + sumOfAll;
        }
      }
      if (button.dataset.id === "C") {
        operation = "";
        num = "";
        sumOfAll = 0;
        textDOM.textContent = num;
      }
    });
  }
});
