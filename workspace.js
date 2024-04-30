// const prompt = require('prompt-sync')();

let humanScore = 0
let computerScore = 0

const rock = document.getElementById("rock");
rock.addEventListener("click", humanRock);

function humanRock() {
  document.getElementById("text").innerHTML = "rock";
}

const paper = document.getElementById("paper");
paper.addEventListener("click", humanPaper);

function humanPaper() {
  document.getElementById("text").innerHTML = "paper";
}

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", humanScissors);

function humanScissors() {
  document.getElementById("text").innerHTML = "scissors";
}

// function playRound() {

// }

// function playerSelection {

// }