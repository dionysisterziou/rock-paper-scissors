function game() {
    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Rock, papper or scissors?");

        if (playerSelection === null || playerSelection === "") {
            alert(`You must select between: "Rock", "Papper" and "Scissors".`);
            round--;
        }

        console.log(round);
        console.log(playerSelection);
    }
}

game();

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
    let lowerCaseWord = word.toLowerCase();
    let firstCharacter = lowerCaseWord.charAt(0);

    return lowerCaseWord.replace(firstCharacter, firstCharacter.toUpperCase());
}


const computerSelection = computerPlay();

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

