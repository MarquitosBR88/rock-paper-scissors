
let humanScore = 0 
let computerScore = 0


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else if (humanChoice === null) {
        alert("Canceled");
    } else {
        alert("This isn't a valid option.");
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("Draw, both chose the same option.");
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 1; ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

