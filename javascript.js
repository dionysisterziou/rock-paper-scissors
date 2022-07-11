function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
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

computerPlay();