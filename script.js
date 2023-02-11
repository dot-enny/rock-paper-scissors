const choices = document.querySelectorAll('.choice');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');
const drawDiv = document.getElementById('draw');
const resetGameDiv = document.querySelector('.reset-game');

// COMPUTER CHOICES
let arrayOfChoices = [];
choices.forEach((choice) => {
    arrayOfChoices.push(choice.getAttribute('value'));
});

// SCORES
let humanScore = 0;
let computerScore = 0;
humanScoreSpan.innerText = `YOU : ${humanScore}`;
computerScoreSpan.innerText = `COMPUTER : ${computerScore}`;
const win = () => {
    return humanScore++;
};
const lose = () => {
    return computerScore++;
}

// ADD DRAW ANIMATION
const draw = () => {
    drawDiv.classList.remove('opac');
    drawDiv.classList.add('pop');
};
removeAnimation([drawDiv], 'pop', 'opac');
// REMOVE DRAW-ANIMATION
// function removeDrawTransition (e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('pop');
//     e.target.classList.add('opac');
// }
// drawDiv.addEventListener('transitionend', removeDrawTransition);


function removeAnimation ([...fields], toRemove, toAdd) {
    fields.forEach((field) => {
        field.addEventListener('transitionend', (e) => {
            if (e.propertyName !== 'transform') {
                e.target.classList.remove(toRemove);
                e.target.classList.add(toAdd);
            };
        });
    });
};



// WIN, LOSE AND DRAW CONDITIONS
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        // get choices
        let humanChoice = choice.getAttribute('value');
        let computerChoice = arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];
        console.log(humanChoice, computerChoice);

        // add human choice animation
        choice.classList.add('human-select');
        removeAnimation([choice], 'human-select');

        // remove human choice animation
        // function removeHumanChoiceAnimation (e) {
        //     if (e.propertyName !== 'transform') return;
        //     e.target.classList.remove('human-select');
        // };
        // choice.addEventListener('transitionend', removeHumanChoiceAnimation);

        // computer choice animation 
        // function comAni () {
        //     let comCh = choice.getAttribute('data-test');
        //     if (computerChoice == comCh) {
        //         choice.classList.add('computer-select');
        //         choice.addEventListener('transitionend', removeComputerChoiceAnimation);
        //     };
        //     function removeComputerChoiceAnimation (e) {
        //         if (e.propertyName !== 'transform') return;
        //         e.target.classList.remove('computer-select');
        //     };
        // }
        // comAni();
        
        // WIN, LOSE AND DRAW CONDITIONS
        if (humanChoice == computerChoice) {
            draw();
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            win();
            console.log(humanScore, computerScore);
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            win();
            console.log(humanScore, computerScore);
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            win();
            console.log(humanScore, computerScore);
        } else {
            lose();
            console.log(humanScore, computerScore);
        }
        humanScoreSpan.innerText = `YOU : ${humanScore}`;
        computerScoreSpan.innerText = `COMPUTER : ${computerScore}`;
    })
});

// RESET GAME
resetGameDiv.addEventListener('click', (e) => {
    resetGameDiv.classList.add('reset-game-btn-animation');
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.innerText = `YOU : ${humanScore}`;
    computerScoreSpan.innerText = `COMPUTER : ${computerScore}`;
});
// RESET-BUTTON ANIMATION
removeAnimation([resetGameDiv], 'reset-game-btn-animation');
// function removeResetAnimation (e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('reset-game-btn-animation');
// }
// resetGameDiv.addEventListener('transitionend', removeResetAnimation);
