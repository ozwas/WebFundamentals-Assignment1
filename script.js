document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".scroll-up");
    btn.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

/* https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript */
function say(m) {
    let msg = new SpeechSynthesisUtterance(m);
    speechSynthesis.speak(msg);
}

// Initialize scores
let wins = 0;
let losses = 0;
let ties = 0;

// Function to update the scoreboard dynamically
function updateScoreboard() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}
/* Rock Paper Scissors game with random computer choices*/
function play(user) {
    // Computer's random choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result of the game
    let result;
    if (user === computerChoice) {
        result = "tie";
        ties++;
    } else if (
        (user === "rock" && computerChoice === "scissors") ||
        (user === "paper" && computerChoice === "rock") ||
        (user === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
        wins++;
    } else {
        result = "lose";
        losses++;
    }
    let myMessage = "Computer chose " + computerChoice + ", you " + result + "!"
    alert(myMessage);
    say(myMessage);

    updateScoreboard();
}

// Resetting the game scores
function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    
    // Update the scoreboard with reset values
    updateScoreboard();
}
