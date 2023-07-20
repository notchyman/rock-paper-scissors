let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let selection = arr[Math.floor(Math.random() * arr.length)];
    return selection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        return "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        return "player";
    } else {
        return "tie";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            console.log("You win this round!");
        } else if (result === "computer") {
            console.log("Computer wins this round!");
        } else {
            console.log("It's a tie!");
        }

        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
}

game();