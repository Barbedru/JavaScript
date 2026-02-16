// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper , scissors ) ? ");


function getPlayerChoice(playerInput){
    var choice = ['rock','paper','scissors'];
    playerInput = playerInput.toLowerCase (); //minuscule
    if (choice.includes(playerInput)){
        console.log("Your Choice :",playerInput)
        return  playerInput;
    }else{
        console.log("Wrong choice")
    }
    return null;
}
function getRandomIntInclusive(min, max) { //fonction de choix aléatoire
    min = Math.ceil(min); //Plus petit entier supérieur ou égal au nombre donné
    max = Math.floor(max); //Plus grand entier inférieur ou égal au nombre donné
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var user = getPlayerChoice(playerInput)

if (user === null) {
    var randomIndex = getRandomIntInclusive(0,2);
    var choice = ['rock', 'paper', 'scissors'];
    console.log("Random :", choice[randomIndex]);
}

function findWinner( playerChoice,computerChoice){
  if(playerChoice == playerInput){
    return "Tied" ;  }  
  if (playerChoice == 'rock') { 
    if (computerChoice == 'scissors') {
      return "Won";
    } else {
      return "Lost";
    }
  }  
    if( playerChoice =='paper'){ 
    if(computerChoice =='rock'){
        return "Lost";
     }else {
        return "Won";
        }
    }
    if(playerChoice == 'scissors'){
        if(computerChoice == 'paper'){
            return "Won";  
         }else{
            return "Lost";  
         }
    }
  }
    
  function playGame (){
  let uChoice = getPlayerChoice("rock");
  if (!uChoice){
  uChoice = getComputerChoice();
  console.log('user choice :', uChoice);  
  }

  let computerChoice = getComputerChoice();
  console.log('computer choice :',computerChoice);

  function getComputerChoice(){
    const choice = ['rock', 'paper','scissors'];
    const index = getRandomIntInclusive(0,2);
    return choice[index];
  }
  console.log("Result :", findWinner(uChoice, computerChoice));
  }
  
//game start
  playGame();