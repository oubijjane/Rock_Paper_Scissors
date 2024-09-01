/*
make rock paper scissors game
create a function for random select for the computer
by saving the values in an array and select one randomly
by index by etRandomNUmber function
create a funtion userINput() to take user input and return the result
create function to compare eache value with the other
creation a function result() to select the proper comparaison method
depending in the value of the variable assinged to the function
add the result() function to the userInput() function
*/
let computerChoice = ["rock","paper","scissors"];
let choice = prompt("Rock, Paper, or Scissors? ");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number) {
  return computerChoice[getRandomNUmber()];
}

function getRandomNUmber() {
    const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(computerChoice.length);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}






