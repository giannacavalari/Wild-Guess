let animals = ["snake", "shark", "dog", "dolphin", "lizard", "lion", "tiger", "turtle", "sheep", "pig", "panda", "monkey", "bear","frog"];
let currentAnimal;
let currentLetter;
let attempts = 0;

window.onload = function(){
    startGame()
}
// Function to start the game
function startGame() {
    attempts = 0;
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    console.log(currentAnimal)
    currentLetter = currentAnimal[0];
    document.getElementById("guess").value = "";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("letterconatiner").classList.add("hidden")
    document.getElementById("incorrect").classList.add("hidden")
    document.getElementById("correct").classList.add("hidden")

}

// Check the guess
function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    if (guess === currentAnimal) {
        document.getElementById("correct").classList.remove("hidden")
    } else {
        attempts++;
        if (attempts >= 3) {
            document.getElementById("incorrect").classList.remove("hidden")
            document.getEleme
        } else {
            document.getElementById("correct").classList.remove("hidden")
        }
    }
}

// Give a hint 
function giveHint() {
    console.log(currentLetter)
    document.getElementById("letter").textContent = currentLetter;
    document.getElementById("letterconatiner").classList.remove("hidden")
}

// Reset Game
function resetGame() {
    startGame();
}
