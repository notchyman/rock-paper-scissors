const body = document.body
let div = document.createElement("div")

var list = document.getElementById('demo');

let playerSelection = ""; 

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

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

    let resultMessage = document.createElement("li")

    if (roundCount < 5)
        if (result === "player") {
            playerScore += 1;
            roundCount += 1;
            resultMessage.textContent = "You win this round!";
            list.append(resultMessage);
        } else if (result === "computer") {
            computerScore += 1;
            roundCount += 1;
            resultMessage.textContent = "Computer wins this round!";
            list.append(resultMessage);
        } else {
            roundCount += 1;
            resultMessage.textContent = "It's a tie!";
            list.append(resultMessage);
        }
        /* console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`); */

        if (roundCount == 5 && playerScore > computerScore) {
            div.innerText = "Player wins the match!"
            body.append(div)
        } else if (roundCount == 5 && computerScore > playerScore) {
            div.innerText = "Computer wins the match!"
            div.append
            body.append(div)
        }

}

const buttons = document.querySelectorAll("#button1, #button2, #button3");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        game(button.textContent.toLowerCase());
    });
});