const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const resultElement = document.getElementById("result");
    const attemptsElement = document.getElementById("attempts");
    const correctSound = document.getElementById("correctSound");
    const wrongSound = document.getElementById("wrongSound");

    attempts++;

    if (userGuess === randomNumber) {
        resultElement.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
        resultElement.style.color = "lightgreen";
        correctSound.play();
        document.getElementById("restartBtn").classList.remove("hidden");
    } else if (userGuess < randomNumber) {
        resultElement.textContent = "Too low! Try again.";
        resultElement.style.color = "orange";
        wrongSound.play();
    } else if (userGuess > randomNumber) {
        resultElement.textContent = "Too high! Try again.";
        resultElement.style.color = "orange";
        wrongSound.play();
    }
    attemptsElement.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
    window.location.reload();
}
