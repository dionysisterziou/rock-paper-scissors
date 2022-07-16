function game() {
    for (let round = 1; round <= 1; round++) {
        let playerSelection = capitalize(prompt("Rock, papper or scissors?"));
        
        if (playerSelection === null || playerSelection === "") {
            alert(`You must select between: "Rock", "Papper" or "Scissors".`);
            round--;
        } else if (playerSelection === "Rock" || playerSelection === "Papper" || playerSelection === "Scissors") {
            alert(`Success!`);
        } else {
            alert(`Incorrect object! You must select between: "Rock", "Papper" or "Scissors".`);
            round--;
        }
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
    }
}

