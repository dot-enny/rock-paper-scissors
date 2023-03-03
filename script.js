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


// COMPUTER CHOICE ANIMATION
function comAni(computerChoice) {
    choices.forEach((choice) => {
        let comChoice = choice.getAttribute('value');
        if (computerChoice == comChoice) {
            addAnimation(choice, 'computer-select');
            removeAnimation([choice], 'computer-select');
        };
    });
};


// WIN, LOSE AND DRAW CONDITIONS
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        // GET CHOICES
        let humanChoice = choice.getAttribute('value');
        let computerChoice = arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];

        // ADD HUMAN CHOICE ANIMATION
        addAnimation(choice, 'human-select');
        // REMOVE HUMAN CHOICE ANIMATION
        removeAnimation([choice], 'human-select');
        // COMPUTER CHOICE ANIMATION 
        comAni(computerChoice);

        // WIN, LOSE AND DRAW CONDITIONS
        if (humanChoice == computerChoice) {
            draw();
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            win();
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            win();
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            win();
        } else {
            lose();
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
