const possibleChoices = ['rock', 'paper', 'scissors'];

function promptPlayer() {
    let playerChoice = prompt("Rock,Paper,Scissors? ");
    let lowerCasePlayerChoice = playerChoice.toLowerCase();
    if (possibleChoices.includes(lowerCasePlayerChoice))
        return lowerCasePlayerChoice;
    else
        console.log(lowerCasePlayerChoice + ' is not an option!');
}

function computerPlay() {
    let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    console.log(computerChoice);
    return computerChoice;
}

function playRound(lowerCasePlayerChoice, computerChoice) {
    promptPlayer();
    computerPlay();
    if ((lowerCasePlayerChoice == 'rock' && computerChoice == 'scissors') || (lowerCasePlayerChoice == 'paper' && computerChoice == 'rock') || (lowerCasePlayerChoice == 'scissors' && computerChoice == 'paper'))
            console.log('You won the round!');
        else if ((lowerCasePlayerChoice == 'rock' && computerChoice == 'paper') || (lowerCasePlayerChoice == 'paper' && computerChoice == 'scissors') || (lowerCasePlayerChoice == 'scissors' && computerChoice == 'rock'))
            console.log('You lost the round!');
        else
            console.log('Draw!');
}

function game() {
    const n = 5;
    let scorePlayer = 0;
    let scoreComputer = 0;
    let numberOfDraws = 0;
    for(i = 0; i < n; i++)
        playRound();
        if (console.log('You won the round!'))
            scorePlayer++;
            else if (console.log('You lost the round!'))
                scoreComputer++;
            else if (console.log('Draw!'))
                numberOfDraws++;
    if (scoreComputer > scorePlayer)
        console.log('You lost the game!' + scorePlayer + ' - ' + scoreComputer);
        else if (scoreComputer < scorePlayer)
            console.log('You won the game!' + scorePlayer + ' - ' + scoreComputer);
        else
            console.log('You drew the game!' + scorePlayer + ' - ' + scoreComputer);
}

game();