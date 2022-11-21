//global variables, can be accessed by all functions

const playerName=prompt("entername")

let playerHealth=15

const monsterName="Hawk"

let monsterHealth=15

//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playerAttack(){
let playerAttackPoints=randomNum(1,6)

monsterHealth=monsterHealth-playerAttackPoints

  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster
  // 2. how much damage the player did 
  // 3. how much health the monster has 
  alert(`${playerName} attack ${monsterName}.${playername} did ${playerAttackPoints} damage to ${monsterName}.${monsterName} has ${monsterHealth}.`)
}

function monsterAttack(){
let monsterAttack=randomNum(1,5)
  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints

  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 

  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player 
  // 2. how much damage the monster did 
  // 3. how much health the player has 
  alert(`${monsterName} attack ${playerName}.${monsterName} did ${monsterAttckPoints}
  damage to ${playerName}.${playerName} has ${playerHealth}.`)
}

function playRound() {
  let any=randomNum(0,2)
  
  //0 = pl
  
  if(any===0){
    playerAttack()
    if(monsterHealth>0){
      monsterAttack()
    }

  }
  else{
    monsterAttack()
    if(playerHealth>0){
      playerAttack()
    }
  }
  monsterAttack()
    if(playerHealth>0){
      playerAttack()
    }
  //if player goes first, run playerAttack, then if monsterHealth > 0, run 

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(
    `Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
 
   //call playRound inside the while loop
    
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
}

//call playGame to start game
