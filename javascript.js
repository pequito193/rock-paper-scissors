let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay() {
    const possibleChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerChoice;
}

function playRound(playerSelection) {
    let computerChoice = computerPlay();
    switch(playerSelection) {
        case 'rock':
            if(computerChoice == 'paper') {
                scoreComputer++;
            } else if(computerChoice == 'scissors') {
                scorePlayer++;
            } else {
            }
        break;
        case 'paper':
            if(computerChoice == 'scissors') {
                scoreComputer++;
            } else if(computerChoice == 'rock') {
                scorePlayer++;
            } else {
            }
        break;
        case 'scissors':
            if(computerChoice == 'rock') {
                scoreComputer++;
            } else if(computerChoice == 'paper') {
                scorePlayer++;
            } else {
            }
        break;
    }
    resultPlayer.textContent = 'Player: ' + scorePlayer + ' (' + playerSelection + ')'
    resultComputer.textContent = 'Computer: ' + scoreComputer + ' (' + computerChoice + ')'
}

const results = document.querySelector(".results")
const resultPlayer = document.createElement('p')
const resultComputer = document.createElement('p')
console.log(results)
results.appendChild(resultPlayer)
results.appendChild(resultComputer)