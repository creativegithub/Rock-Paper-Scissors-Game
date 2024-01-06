let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

// Generate computer choice
const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Draw game
const drawGame = () => {
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor = "#3f3f3f";
};

// User choice
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
        // draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper & scissosr
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // scissors & rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock & paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};



// Show winnner 
const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});