const rockPaperScissors = ["Rock", "Paper", "Scissors"];

function computerPlay(rockPaperScissors) {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}

let playerSelection = "Rock";
const computerSelection = computerPlay(rockPaperScissors);

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return `It's a draw! You both picked ${playerSelection}`;
    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock")
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    else
        return `You win! ${playerSelection} beats ${computerSelection}`;
    
}

console.log(playRound(playerSelection, computerSelection));