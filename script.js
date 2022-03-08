const rockPaperScissors = ["Rock", "Paper", "Scissors"];

function computerPlay(rockPaperScissors) {
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
}

let playerSelection = "Rock";
let computerSelection = computerPlay(rockPaperScissors);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "draw";
    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock")
        return "computer";
    else
        return "player";   
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, scissors?");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        computerSelection = computerPlay(rockPaperScissors);
        playRound(playerSelection, computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if(result === "player") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerPoints++;
        }
        else if (result === "computer") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerPoints++;
        }
        else {
            console.log(`It's a draw! You both picked ${playerSelection}`);
        }
    }
    if (playerPoints === computerPoints)
        console.log(`It's a draw: ${playerPoints} ${computerPoints}`);
    else if (playerPoints > computerPoints)
        console.log(`You win: ${playerPoints} ${computerPoints}`);
    else
        console.log(`You lose: ${playerPoints} ${computerPoints}`);
}

game();