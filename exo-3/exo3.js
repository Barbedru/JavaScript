// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice ( rock, paper , scissors ) ? ");

console.log(playerInput.toLowerCase());

function getPlayerChoice(playerInput){
    if (playerInput === 'rock' || 'paper' || 'scissors'){
        return  playerInput;
    }else{
        console.log('Erreur');
    }
}