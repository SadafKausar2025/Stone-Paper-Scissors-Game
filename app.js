let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
  // stone paper scissor
};

const drawGame = () => {
  msg.innerText = "Game was draw Play again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, UserChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = "You loose! , computer wins!";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (UserChoice) => {
  const compChoice = genCompChoice();

  if (UserChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (UserChoice === "stone") {
      // compchoice = "paper"/"scissors";
      userWin = compChoice === "paper" ? false : true;
    } else if (UserChoice === "paper") {
      // compchoice = "stone" / "scissors";
      userWin = compChoice === "stone" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, UserChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    playGame(UserChoice);
  });
});
