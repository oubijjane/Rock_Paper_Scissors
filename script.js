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
let computerChoices = ["rock", "paper", "scissors"];
let humanSelsection;
let computerSelection
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(number) {
    return computerChoices[getRandomNUmber()];
}

function getRandomNUmber() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(computerChoices.length);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ");
    return choice;
}
function win() {
    humanScore += 1;
    return humanScore;
}

function lose() {
    computerScore += 1;

    return computerScore;
}

function rock(x) {
    console.log(x)
    if (x === "scissors") {
        return win();
    }
    return lose();
}

function paper(x) {
    console.log(x)
    if (x === "rock") {
        return win();
    }
    return lose();
}

function scissors(x) {
    console.log(x)
    if (x === "paper") {
        return win();
    }
    return lose();
}
function playRound(HumanChoice, computerChoice) {
    console.log(HumanChoice +" " + computerChoice);
    if(HumanChoice == computerChoice) {
        return "no winner";
    }
    else if(HumanChoice == "paper") {
         return paper(computerChoice);
    }
    else if(HumanChoice == "rock") {
        return rock(computerChoice);
   }
   else if(HumanChoice == "scissors") {
    return scissors(computerChoice);
}

    return "no valid choise";
}

const body = document.querySelector("body");
const btn = document.createElement("button");
const div = document.createElement("div");
const btnR = document.createElement("button");
const btnP = document.createElement("button");
const btnS = document.createElement("button");
const result = document.createElement("div");
result.id = "result";
btnR.id = "rock"
btnP.id = "paper";
btnS.id = "scissors";
btnR.textContent = "rock";
btnP.textContent = "paper";
btnS.textContent = "scissors";
btn.textContent = "play round";
btn.id = "playRound";
body.addEventListener("click", (e) => {

    switch (e.target.id) {
        case "playRound":
            div.appendChild(btnR);
            div.appendChild(btnP);
            div.appendChild(btnS);
            body.appendChild(div);
            body.removeChild(result);
            break;
        default:
            console.log(playRound(e.target.id, getComputerChoice()));
            result.textContent = "human score " + humanScore + " computer score " + computerScore;
            body.appendChild(result);

    }
    if(humanScore >= 5) {
        result.textContent = "you win";
        body.removeChild(div);
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore >= 5) {
        result.textContent = "you loose";
        body.removeChild(div);
        humanScore = 0;
        computerScore = 0;
    }
})
body.appendChild(btn);







