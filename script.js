/* Event listener to scroll to the top of the page when the user clicks on the scroll up button, uses DOMContentLoaded
 to ensure that the HTML has finished loading before executing the javascript */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".scroll-up");
    btn.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

/* https://stackoverflow.com/questions/15653145/using-google-text-to-speech-in-javascript 
function to read/speak the message */
function say(m) {
    let msg = new SpeechSynthesisUtterance(m);
    speechSynthesis.speak(msg);
}

/* Sets the scores to 0, initializes the scores */
let wins = 0;
let losses = 0;
let ties = 0;

/* Function to dynamically update the scoreboard */
function updateScoreboard() {
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('ties').textContent = ties;
}
/* Rock Paper Scissors game with random computer choices*/
function play(user) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; /*computer randomly selects their choice */

    /* defines the result variable */
    let result;
    if (user === computerChoice) {     /* conditional statements to define different results for different actions */
        result = "tie";
        ties++;
    } else if (
        (user === "rock" && computerChoice === "scissors") ||
        (user === "paper" && computerChoice === "rock") ||
        (user === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
        wins++;
        launchConfetti(); /* calling function to launch confetti when user wins */
    } else {
        result = "lose";
        losses++;
    }
    let myMessage = "Computer chose " + computerChoice + ", you " + result + "!" /* defines message to be sent to the user of the game result */
    alert(myMessage); /* calls function to send/alert the user of the message */
    say(myMessage); /*calls the say function to read the message */

    updateScoreboard(); /*calls function to update the scoreboard with real-time results, showing the current number of wins, losses and ties */
}

/* function to reset the game scores */
function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    
    /* calls function to update the scoreboard with the reset game function values, resetting the scores to 0 */
    updateScoreboard();
}

function launchConfetti() {    /*function to launch confetti */
    const container = document.getElementById('confetti-container');
    const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -20 + 'vh';
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = confetti.style.width;

        container.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 4000); 
    }
}
