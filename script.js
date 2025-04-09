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

document.getElementById("rockButton").addEventListener("click", function(event) {      
    console.log(event.target.id);      
    play("rock");    
});

document.getElementById("paperButton").addEventListener("click", function(event) {      
    console.log(event.target.id);      
    play("paper");    
});

document.getElementById("scissorsButton").addEventListener("click", function(event) {      
    console.log(event.target.id);      
    play("scissors");    
});

/* Rock Paper Scissors game with random computer choices*/
function play(user) {
    // Computer's random choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result of the game
    let result;
    if (user === computerChoice) {
        result = "tie";
    } else if (
        (user === "rock" && computerChoice === "scissors") ||
        (user === "paper" && computerChoice === "rock") ||
        (user === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
    } else {
        result = "lose";
    }
    let myMessage = "Computer chose " + computerChoice + ", you " + result + "!"
    alert(myMessage);
    say(myMessage);
}
