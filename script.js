// Global variables
let computerScore = 0;
let userScore = 0;

// Function to get the computer choice from an array - randomly
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// Function to compare the choice of the computer and user
function compareChoice(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return `User wins this round! User chose ${userChoice}. Computer chose ${computerChoice}.`;
  } else {
    computerScore++;
    return `Computer wins this round! User chose ${userChoice}. Computer chose ${computerChoice}.`;
  }
}

// Function playGame
function playGame() {
  const buttons = document.querySelectorAll('button');
  const resultDiv = document.getElementById('result');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const userChoice = this.id;
      const result = compareChoice(userChoice);
      resultDiv.innerText = result;
      updateScores();
    });
  });
}

// Function to update the scores and alert when someone has won  
function updateScores() {
  const scoreDiv = document.getElementById('result');
  scoreDiv.innerHTML += `<br>User: ${userScore} | Computer: ${computerScore}`;
  if (userScore === 2) {
    alert("User wins the game!");
  } else if (computerScore === 2) {
    alert("Computer wins the game!");
  }
}

// Call the playGame function to start the game
playGame();