const possibleChoices = ['rock', 'paper', 'scissors'];
let scoreComputer = 0;
let scorePlayer = 0;

function computerPlay() {
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log(computerChoice);
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
    console.log('Player: ' + scorePlayer);
    console.log('Computer: ' + scoreComputer);
}

const result = document.getElementById('result')
result.textContent = 'hi'