// function play(){
//     console.log('Playing')
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


// part-2:
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    // stop the game
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const targetAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = targetAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore);

        // ---------------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScoreNumber = parseInt(currentScoreText);
        // const newScore = currentScoreNumber + 1;
        // currentScoreElement.innerText = newScore;
        // ---------------------------------------------------------------------------
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed, loss a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // const currentLifeScore = document.getElementById('current-life');
        // const currentLifeText = currentLifeScore.innerText;
        // const currentLifeNumber = parseInt(currentLifeText);
        // const newLife = currentLifeNumber - 1;
        // currentLifeScore.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);


// part-1:
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set key background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide all, show only playground
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = document.getElementById('current-score');
    setTextElementValueById('last-score', lastScore.innerText);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}