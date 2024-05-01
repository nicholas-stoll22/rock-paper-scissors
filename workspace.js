// const prompt = require('prompt-sync')();

let humanScore = 0
let computerScore = 0

choiceArray = ["Rock", "Paper", "Scissors"]


// user selects rock, paper, or scissors by clicking button,
// game begins
const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", humanRock);

function humanRock() {
  key = 0
  gameLogic(key);
}

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", humanPaper);

function humanPaper() {
  key = 1
  gameLogic(key);
}

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", humanScissors);

function humanScissors() {
  key = 2
  gameLogic(key);
}

function computerGen() {
    const random = Math.floor(Math.random() * 3);
    computerChoice = choiceArray[random];
    return computerChoice
}

// game logic
function gameLogic(humanKey, computerKey) {
    humanChoice = choiceArray[key];
    computerChoice = computerGen();


    if (computerChoice === 'Scissors' && humanChoice === 'Scissors') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        It's a tie! No points awarded. Try again.`
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        You wwin! Add one point to your score.`
        humanScore++
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        The computer wins! Addd one point to their score.`
        computerScore++
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        The computer wins! Add one point to their score!`
        computerScore++
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Rock' && humanChoice === 'Rock') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        It's a tie! No points awarded. Try again.`
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        You win! Add one point to your score!`
        humanScore++
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        The computer wins! Add one point to their score.`
        computerScore++
        scoreBoard(humanScore, computerScore);
    } else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        You win! Add one point to your score!`
        humanScore++
        scoreBoard(humanScore, computerScore);
    } else (computerChoice === 'Paper' && humanChoice === 'Paper') 
        document.getElementById("game-text").innerHTML = `You picked "${humanChoice}" and the computer picked "${computerChoice}"... <br/><br/>
        It's a tie! No points awarded. Try again.`
        scoreBoard(humanScore, computerScore);
    }

function scoreBoard(humanScore, computerScore) {
    if (humanScore === 5) {
        document.getElementById("scoreboard").innerHTML = `Congratulations! You\'ve reached 5 points first. You win!`
    } else if (computerScore === 5) {
        document.getElementById("scoreboard").innerHTML = `Oh no! The computer has reached 5 points first. You lose!`
    } else {
        document.getElementById("scoreboard").innerHTML = `User: ${humanScore} | Computer: ${computerScore}`
    }
}

