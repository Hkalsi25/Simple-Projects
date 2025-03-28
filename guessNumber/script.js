let RandomNumber = parseInt(Math.random() * 100) + 1;
const input = document.querySelector("#guessField");
const submit = document.getElementById("submit");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("#wrapper"); // use wrapper to append restart
const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuesses.push(guess);
        if (numGuesses === 11) {
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${RandomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} guesses!`);
        endGame();
    } else if (guess < RandomNumber) {
        displayMessage("Too low! Try again!");
    } else if (guess > RandomNumber) {
        displayMessage("Too high! Try again!");
    }
}

function displayGuesses(guess) {
    input.value = "";
    guesses.innerHTML += `${guess}, `;
    numGuesses++;
    lastResult.innerHTML = `${11 - numGuesses} guesses left`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
    input.value = "";
    input.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    document.getElementById("newGame").addEventListener("click", function () {
        RandomNumber = parseInt(Math.random() * 100) + 1;
        input.removeAttribute("disabled");
        prevGuesses = [];
        numGuesses = 1;
        guesses.innerHTML = "";
        lastResult.innerHTML = "10";
        lowOrHi.innerHTML = "";
        p.innerHTML = "";
        playGame = true;
    });
}
