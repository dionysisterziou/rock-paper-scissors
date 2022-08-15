const score = document.querySelector('#score');
const finalResult = document.querySelector('#finalResult');
let computerWins = 0;
let playerWins = 0;

score.textContent = `${computerWins}-${playerWins}`;

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
    const result = document.querySelector('#result');

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            result.textContent = `Draw!`;
        } else if (computerSelection === 'Papper') {
            computerWins++;
            result.textContent = `You loose!`;
        } else {
            playerWins++;
            result.textContent = `You win!`;
        }
    } else if (playerSelection === 'Papper') {
        if (computerSelection === 'Rock') {
            playerWins++;
            result.textContent = `You win!`;
        } else if (computerSelection === 'Papper') {
            result.textContent = `Draw!`;
        } else {
            computerWins++;
            result.textContent = `You loose!`;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerWins++;
            result.textContent = `You loose!`;
        } else if (computerSelection === 'Papper') {
            playerWins++;
            result.textContent = `You win`;
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
            score.textContent = `${computerWins}-${playerWins}`;

            if (computerWins === 5) {
                finalResult.textContent = 'Computer wins!';

                buttons.forEach((button) => {
                    button.disabled = true;
                })
            } else if (playerWins === 5) {
                finalResult.textContent = 'Player wins!';

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