function game() {
    for (let round = 1; round <= 5; round++) {
        const playerSelection = capitalize(prompt("Rock, papper or scissors?"));
        const computerSelection = computerPlay();
        
        if (playerSelection === null || playerSelection === "") {
            alert(`You must select between: "Rock", "Papper" or "Scissors".`);
            round--;
        } else if (playerSelection === "Rock" || playerSelection === "Papper" || playerSelection === "Scissors") {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            alert(`Incorrect object! You must select between: "Rock", "Papper" or "Scissors".`);
            round--;
        }
    }

    function capitalize(word) {
        let lowerCaseWord = word.toLowerCase();
        let firstCharacter = lowerCaseWord.charAt(0);
    
        return lowerCaseWord.replace(firstCharacter, firstCharacter.toUpperCase());
    }

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
                return `You loose!`;
            } else {
                return `You win!`;
            }
        } else if (playerSelection === 'Papper') {
            if (computerSelection === 'Rock') {
                return `You win!`;
            } else if (computerSelection === 'Papper') {
                return `Draw!`;
            } else {
                return `You loose!`;
            }
        } else if (playerSelection === 'Scissors') {
            if (computerSelection === 'Rock') {
                return `You loose!`;
            } else if (computerSelection === 'Papper') {
                return `You win`;
            } else {
                return `Draw!`;
            }
        }
    }
}

game();

