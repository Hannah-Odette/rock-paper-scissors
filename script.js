const rockPaperScissors = ["rock", "paper", "scissors"];

function computerPlay(rockPaperScissors) {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}

const playerSelection = "Rock";
const computerSelection = computerPlay(rockPaperScissors);

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection)
        return "It's a draw!";
}

console.log(playRound(playerSelection, computerSelection));