const possibleChoices = ['rock', 'paper', 'scissors'];
let scoreComputer = 0;
let scorePlayer = 0;

function promptPlayer() {
    let playerChoice = prompt("Rock,Paper,Scissors? ");
    let lowerCasePlayerChoice = playerChoice.toLowerCase();
    if (possibleChoices.includes(lowerCasePlayerChoice)) {
        return lowerCasePlayerChoice;
    }else {
        console.log(lowerCasePlayerChoice + ' is not an option!');
    }
}

function computerPlay() {
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function playRound(lowerCasePlayerChoice, computerChoice) {
    promptPlayer();
    computerPlay();
    switch(lowerCasePlayerChoice) {
        case 'rock':
            if(computerChoice == 'paper') {
                console.log('You lost');
                scoreComputer++;
            } else if(computerChoice == 'scissors') {
                console.log('You won');
                scorePlayer++;
            } else {
                console.log('You drew');
            }
        break;
        case 'paper':
            if(computerChoice == 'scissors') {
                console.log('You lost');
                scoreComputer++;
            } else if(computerChoice == 'rock') {
                console.log('You won');
                scorePlayer++;
            } else {
                console.log('You drew');
            }
        break;
        case 'scissors':
            if(computerChoice == 'rock') {
                console.log('You lost');
                scoreComputer++;
            } else if(computerChoice == 'paper') {
                console.log('You won');
                scorePlayer++;
            } else {
                console.log('You drew');
            }
        break;
    }
    console.log('Player: ' + scorePlayer);
    console.log('Computer: ' + scoreComputer);
}

function game() {
    for(i = 0; i < 5; i++)
        playRound();
    if (scoreComputer > scorePlayer)
        console.log('You lost the game! ' + scorePlayer + ' - ' + scoreComputer);
        else if (scoreComputer < scorePlayer)
            console.log('You won the game! ' + scorePlayer + ' - ' + scoreComputer);
        else
            console.log('You drew the game! ' + scorePlayer + ' - ' + scoreComputer);
}

game();