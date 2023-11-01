// Global variables
let computerScore = 0;
let userScore = 0;

// Function getUserChoice
// Use prompt to ask the user to enter their choice for rock, paper, or scissors
// Return the user's choice
function getUserChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?");
  let userChoice = userInput.toLowerCase();
  return userChoice;
}

// Function getComputerChoice
// Generate a random choice for the computer (rock, paper, or scissors)
// Return the computer's choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// Function compareChoice
// Takes in userChoice and computerChoice as arguments
// Compares the choices and updates the scores
function compareChoice() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    alert("This round was a tie. Try again!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    alert(`User chose ${userChoice}. Computer chose ${computerChoice}. User wins this round!`);
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    computerScore++;
    alert(`User chose ${userChoice}. Computer chose ${computerChoice}. Computer wins this round!`);
  } else {
    alert(`There has been an error. Try again!`)
  }
}

// Function playGame
// Counts round number
// Runs a while loop as long as computer and user's score are < 2 (best 2/3)
function playGame() {
  // Initialize round counter
  let round = 0;

  // Run the game loop while both scores are less than 2
  while (userScore < 2 && computerScore < 2) {
    round++; // Increment round counter

    // Display an alert with the current round number and scores
    alert(`Round ${round}\nUser: ${userScore} | Computer: ${computerScore}`);

    // Call the compareChoice function to play a round
    compareChoice();
  }

  // Display the final result of the game
  if (userScore === 2) {
    alert("User wins the game!");
  } else {
    alert("Computer wins the game!");
  }
}

// Call the playGame function to start the game
playGame();