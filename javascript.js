const greekScore = document.querySelector('#greekScore');
const persianScore = document.querySelector('#persianScore');
const finalResult = document.querySelector('#finalResult');
let playerWins = 0;
let computerWins = 0;

greekScore.textContent = `${playerWins}`;
persianScore.textContent = `${computerWins}`;

function computerPlay() {
    const number = Math.floor(Math.random() * 3) + 1;
    let object;

    if (number === 1) {
        object = 'Rock';
    } else if (number === 2) {
        object = 'Paper';
    } else {
        object = 'Scissors';
    }

    return object;
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('#result');

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            result.textContent = `Draw!`;
        } else if (computerSelection === 'Paper') {
            computerWins++;
            result.textContent = `You loose!`;
        } else {
            playerWins++;
            result.textContent = `You win!`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerWins++;
            result.textContent = `You win!`;
        } else if (computerSelection === 'Paper') {
            result.textContent = `Draw!`;
        } else {
            computerWins++;
            result.textContent = `You loose!`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerWins++;
            result.textContent = `You loose!`;
        } else if (computerSelection === 'Paper') {
            playerWins++;
            result.textContent = `You win!`;
        } else {
            result.textContent = `Draw!`;
        }
    };
}

function game() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computerSelection = computerPlay();
            const playerSelection = capitalize(button.id);

            playRound(playerSelection, computerSelection);
            greekScore.textContent = `${playerWins}`;
            persianScore.textContent = `${computerWins}`;

            if (computerWins === 5) {
                finalResult.textContent = 'Persians win!';

                buttons.forEach((button) => {
                    button.disabled = true;
                })
            } else if (playerWins === 5) {
                finalResult.textContent = 'Greeks win!';

                buttons.forEach((button) => {
                    button.disabled = true;
                })
            }
        });
    });
}

function capitalize(word) {
    let lowerCaseWord = word.toLowerCase();
    let firstCharacter = lowerCaseWord.charAt(0);

    return lowerCaseWord.replace(firstCharacter, firstCharacter.toUpperCase());
}

game();