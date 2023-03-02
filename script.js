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
};


// ADD ANIMATIONS
function addAnimation(field, toAdd, toRemove) {
    field.classList.remove(toRemove)
    field.classList.add(toAdd)
};


// REMOVE ANIMATIONS
function removeAnimation([...fields], toRemove, toAdd) {
    fields.forEach((field) => {
        field.addEventListener('transitionend', (e) => {
            if (e.propertyName !== 'transform') {
                e.target.classList.remove(toRemove);
                e.target.classList.add(toAdd);
            };
        });
    });
};


// ADD DRAW ANIMATION
const draw = () => {
    addAnimation(drawDiv, 'pop', 'opac')
};
// REMOVE DRAW-ANIMATION
removeAnimation([drawDiv], 'pop', 'opac');




// WIN, LOSE AND DRAW CONDITIONS
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        // get choices
        let humanChoice = choice.getAttribute('value');
        let computerChoice = arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];

        // ADD HUMAN CHOICE ANIMATION
        addAnimation(choice, 'human-select');
        // REMOVE HUMAN CHOICE ANIMATION
        removeAnimation([choice], 'human-select');

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
            // console.log(humanScore, computerScore);
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
    });
});

// RESET GAME
resetGameDiv.addEventListener('click', (e) => {
    addAnimation(resetGameDiv, 'reset-game-btn-animation');
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.innerText = `YOU : ${humanScore}`;
    computerScoreSpan.innerText = `COMPUTER : ${computerScore}`;
});
// RESET-BUTTON ANIMATION
removeAnimation([resetGameDiv], 'reset-game-btn-animation');
