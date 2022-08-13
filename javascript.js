let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    const number = Math.floor(Math.random() * 3) + 1;
    let object;

    if (number === 1) {
        object = 'Rock';
    } else if (number === 2) {
        object = 'Papper';
    } else {
        object = 'Scissors';
    }

    return object;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return `Draw!`;
        } else if (computerSelection === 'Papper') {
            computerWins = countComputerWins(computerWins);
            return `You loose!`;
        } else {
            playerWins = countPlayerWins(playerWins);
            return `You win!`;
        }
    } else if (playerSelection === 'Papper') {
        if (computerSelection === 'Rock') {
            playerWins = countPlayerWins(playerWins);
            return `You win!`;
        } else if (computerSelection === 'Papper') {
            return `Draw!`;
        } else {
            computerWins = countComputerWins(computerWins);
            return `You loose!`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerWins = countComputerWins(computerWins);
            return `You loose!`;
        } else if (computerSelection === 'Papper') {
            playerWins = countPlayerWins(playerWins);
            return `You win`;
        } else {
            return `Draw!`;
        }
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    const computerSelection = computerPlay();

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = capitalize(button.id);

            playRound(playerSelection, computerSelection);
        });
    });

    // if (computerWins > playerWins) {
    //     console.log(`Computer wins!`);
    // } else if (computerWins < playerWins) {
    //     console.log(`Player wins!`);
    // } else {
    //     console.log(`It's a draw!`);
    // }
}

function capitalize(word) {
    let lowerCaseWord = word.toLowerCase();
    let firstCharacter = lowerCaseWord.charAt(0);

    return lowerCaseWord.replace(firstCharacter, firstCharacter.toUpperCase());
}

function countComputerWins(computerWins) {
    computerWins = computerWins + 1;

    return computerWins;
}

function countPlayerWins(playerWins) {
    playerWins = playerWins + 1;

    return playerWins;
}

game();

