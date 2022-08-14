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
    const div = document.querySelector('#result');
    const p = document.createElement('p');

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            p.textContent = `Draw!`;
            div.appendChild(p);
        } else if (computerSelection === 'Papper') {
            computerWins = countComputerWins(computerWins);
            p.textContent = `You loose!`;
            div.appendChild(p);
        } else {
            playerWins = countPlayerWins(playerWins);
            p.textContent = `You win!`;
            div.appendChild(p);
        }
    } else if (playerSelection === 'Papper') {
        if (computerSelection === 'Rock') {
            playerWins = countPlayerWins(playerWins);
            p.textContent = `You win!`;
            div.appendChild(p);
        } else if (computerSelection === 'Papper') {
            p.textContent = `Draw!`;
            div.appendChild(p);
        } else {
            computerWins = countComputerWins(computerWins);
            p.textContent = `You loose!`;
            div.appendChild(p);
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerWins = countComputerWins(computerWins);
            p.textContent = `You loose!`;
            div.appendChild(p);
        } else if (computerSelection === 'Papper') {
            playerWins = countPlayerWins(playerWins);
            p.textContent = `You win`;
            div.appendChild(p);
        } else {
            p.textContent = `Draw!`;
            div.appendChild(p);
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

