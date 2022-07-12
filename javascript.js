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

function capitalize(word) {
    let firstCharacter = word.charAt(0);

    return word.replace(firstCharacter, firstCharacter.toUpperCase());
}

const computerSelection = computerPlay();
const playerSelection = 'rock';

function playRound(playerSelection, computerSelection) {
    if (capitalize(playerSelection) === 'Rock') {
        if (computerSelection === 'Rock') {
            return `Draw!`;
        } else if (computerSelection === 'Papper') {
            return `You loose!`;
        } else {
            return `You win!`;
        }
    } else if (capitalize(playerSelection) === 'Papper') {
        if (computerSelection === 'Rock') {
            return `You win!`;
        } else if (computerSelection === 'Papper') {
            return `Draw!`;
        } else {
            return `You loose!`;
        }
    } else if (capitalize(playerSelection) === 'Scissors') {
        if (computerSelection === 'Rock') {
            return `You loose!`;
        } else if (computerSelection === 'Papper') {
            return `You win`;
        } else {
            return `Draw!`;
        }
    } else {
        return `You must select one of three: 'Rock', 'Papper' or 'Scissors'.`;
    }
}

console.log(playRound(playerSelection.toLowerCase(), computerSelection));