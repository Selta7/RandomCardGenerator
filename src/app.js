/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();
};

function generateRandomCard() {
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];
  let indexNumb = Math.floor(Math.random() * num.length);
  let indexSuits = Math.floor(Math.random() * suits.length);

  // connecting with CSS
  const cardDiv = document.querySelector(".card");
  cardDiv.classList = "card " + suits[indexSuits];

  const suitElement = suits[indexSuits];
  const numElement = num[indexNumb];

  const top = cardDiv.querySelector(".top-suit");
  const bot = cardDiv.querySelector(".bot-suit");
  const value = cardDiv.querySelector(".num");

  top.textContent = suitElement;
  bot.textContent = suitElement;
  value.textContent = numElement;
}
const button = document.querySelector("button");
button.addEventListener("click", function() {
  generateRandomCard();
});

function tenSecondTimer() {
  generateRandomCard();
}
setTimeout(tenSecondTimer, 10000);

function changeSize() {
  let cardWidthInput = document.getElementById("card-width").value + "px";
  let cardHeightInput = document.getElementById("card-height").value + "px";
  let card = document.querySelector(".card");
  card.style.width = cardWidthInput;
  card.style.height = cardHeightInput;
}
