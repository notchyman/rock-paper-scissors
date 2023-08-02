
let playerSelection = ""; 

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let selection = arr[Math.floor(Math.random() * arr.length)];
    return selection;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else {
        return "tie";
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === "player") {
        console.log("You win this round!");
        playerScore += 1;
    } else if (result === "computer") {
        console.log("Computer wins this round!");
        computerScore += 1;
    } else {
        console.log("It's a tie!");
    }

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}

const buttons = document.querySelectorAll("#button1, #button2, #button3");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        game(button.textContent.toLowerCase());
    });
});