//function to generate a random number btn 0.6 and 0.8
function getRandomInt(min, max) {
    //BY RANI
    min = Math.ceil(min);
    max = Math.floor(max);
    // removed the Math.floor
    let num =  Math.random() * (max - min) + min; // The maximum is exclusive and the minimum is inclusive
  return Number(num.toFixed(3));
}

function changeGameText(text, add = false){
    //By Micaiah
    if(add){
        document.querySelector("#gameText").innerHTML += text;
    }else{
        document.querySelector("#gameText").innerHTML = text;
    }
}
class EnemySpaceShip{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(target){
        //Rani
        // Make sure to program in an if statement checking if you miss or not
        if (Math.random() < this.accuracy){
            target.hull -=this.firepower;
            return [true, this.firepower] //hit

        } else return false //miss the target
    }


    // die(){
    //     //Rani
    //     return  this.hull <= 0 
    // }

}

class Player{
    constructor(){
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
    //
    attack(target){
        if (Math.random() < this.accuracy){
            target.hull -=this.firepower;
            return [true, this.firepower] //hit

        }  
        return false //miss the target
        //Rani
        // Make sure to program in an if statement checking if you miss or not
    }
    // die(){
    //     //Rani
    //     // return this.hull <= 0

    //     console.log("You Loose!")
    // }
    retreat(){
        //Rani

        clearInterval(gameInterval);
        changeGameText("You Lose! Play Again?", true);
        //If you retreat, the game is over, perhaps leaving the game open for further developments or options
        
    }

}

// Setting up all of the classes needed for the game.

//Player(hull, firepower, accuracy)
//Player.hull, Player.firepower, etc.
//Enemy(hull, firepower, accuracy)

// To access an enemy ship: enemyShips[number]
// To access an enemy ship that is being fought right now: enemyShips[currentEnemy]

let enemyShips = [];
let player = new Player();
for(let i = 0; i < 6; i++) enemyShips.push(new EnemySpaceShip(getRandomInt(3,6), 3, getRandomInt(6,8)/10));

//MICAIAH'S GAMELOOP VARIABLES
let atkBtn = document.querySelector("#attackButton");
let retreatBtn = document.querySelector('#retreatButton');
let pressedAttack = false;
let pressedRetreat = false;
let currentEnemy = 0; 
var gameInterval;

changeGameText("Aliens are trying to take over the world! Here's the first one; what do you do?");
function gameLoop(){
        //Micaiah
    if(pressedAttack){
        pressedAttack = false; //turns it back off so we can press it again
        changeGameText("You chose to take on this next ship!");
        let isCurrentBattleGoing = true;
        while(isCurrentBattleGoing){
            const enemyOuch = player.attack(enemyShips[currentEnemy]);
            if(!enemyOuch){
                changeGameText("<br> Your ship attacked... and missed!", true);
            }else{
                changeGameText(`<br>Your ship attacked and dealt ${enemyOuch[1]} damage. The enemy has ${enemyShips[currentEnemy].hull.toFixed(3)} hull left.`, true);
            }
            if(enemyShips[currentEnemy].hull <= 0){
                // enemyShips[currentEnemy].die();
                changeGameText(`<br> You beat enemy #${currentEnemy+1}! ${5-currentEnemy} left.`, true);
                currentEnemy++;
                if(currentEnemy > 5){
                    changeGameText("<br> All ships are defeated! You win!", true); //change this later
                    clearInterval(gameInterval);
                    isCurrentBattleGoing = false;
                    break;
                }
                changeGameText(`<br> Another ship appears! What do you do?`, true);
                isCurrentBattleGoing = false;
                break;
            }else if(player.hull <= 0){
                //player.die();
                changeGameText("<br><br> Your ship blew into smithereens. The world is gone! <br> Game over.", true);
                isCurrentBattleGoing = false;
                clearInterval(gameInterval);
                break;

            }else{
                const playerOuch = enemyShips[currentEnemy].attack(player);
                if(!playerOuch){
                    changeGameText("<br> The enemy ship attacked... and missed!", true);
                }else{
                    changeGameText(`<br> The enemy ship attacked and dealt ${playerOuch[1]} damage. You have ${player.hull} hull left on your ship.`, true);
                    //console.log("What do you do?");
                }
            }
        }
    }else if(pressedRetreat){
        changeGameText("You chose to retreat. <br>");
        pressedRetreat = false; //turns it back off so we can press it again
        player.retreat(); 
    }
    

        //You attack the first alien ship
        //If the ship survives, it attacks you
        //If you survive, you attack the ship again
        //If it survives, it attacks you again ... etc
        //If you destroy the ship, you have the option to attack the next ship or to retreat
        //You win the game if you destroy all of the aliens
        //You lose the game if you are destroyed
}

atkBtn.addEventListener("click", function(){pressedAttack = true;});
retreatBtn.addEventListener("click", function(){pressedRetreat = true;});
//IMPORTANT - This is so our game is always checking for things and running.
gameInterval = setInterval(gameLoop, 200); 