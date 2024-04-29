const prompt = require('prompt-sync')();

let humanScore = 0
let computerScore = 0

function randomInteger() {
    const random = Math.floor(Math.random() * 3);
    return random
}

function getComputerChoice() {
    computerInt = randomInteger();
    return computerInt
}

function getHumanChoice() {
    let answerRaw = prompt("Rock, paper, scissors. Which will it be? ").toLowerCase();
    answerClean = answerRaw.charAt(0).toUpperCase() + answerRaw.slice(1);
    return answerClean
}

function choiceMaker(int) {
    options = ['Rock', 'Paper', 'Scissors'];
    choice = options[int];
    return choice
}

function playRound(getComputerChoice, getHumanChoice) {
    computerNum = getComputerChoice();
    computerChoice = choiceMaker(computerNum);
    humanChoice = getHumanChoice();

    gameLogic(computerChoice, humanChoice);
}

function gameLogic(computer, human) {
    if (computerChoice === 'Scissors' && humanChoice === 'Scissors') {
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("Tie! Try again.")
    } else if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        humanScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("You win!")
    } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        computerScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("The computer wins!")
    } else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        computerScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("The computer wins!")
    } else if (computerChoice === 'Rock' && humanChoice === 'Rock') {
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("Tie! Try again.")
    } else if (computerChoice === 'Rock' && humanChoice === 'Paper') {
        humanScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("You win!")
    } else if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        computerScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("You lose!")
    } else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        humanScore++
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("You win!")
    } else if (computerChoice === 'Paper' && humanChoice === 'Paper') {
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("Tie! Try again.") 
    } else {
        console.log(`Player: ${humanScore} Computer: ${computerScore}`)
        console.log(`The computer picked ${computerChoice} and you picked ${humanChoice}...`)
        console.log("Something went wrong.")
    }
}

gameEnd = (humanScore, computerScore) => {
    console.log("The game has ended...")
    if (computerScore < humanScore) {
      console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
      console.log("You lost the game! Better luck next time.");
    } else if (computerScore === humanScore) {
        console.log("It was a tie.")
    }
  };

for (let i=0; i<5; i++) {
    playRound(getComputerChoice,getHumanChoice)
};

gameEnd(humanScore, computerScore);