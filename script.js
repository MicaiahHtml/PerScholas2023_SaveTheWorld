//function to generate a random number btn 0.6 and 0.8
function getRandomInt(min, max) {
    //BY RANI
    min = Math.ceil(min);
     max = Math.floor(max);
    // removed the Math.floor
    return(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    
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
            return true //hit

        } else return false //miss the target
    }


    die(){
        //Rani
        return  this.hull <= 0 
    }

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
    die(){
        //Rani
        // return this.hull <= 0

        console.log("You Loose!")
    }
    retreat(){
        //Rani
        console.log("Retreat")
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
let mainText = document.querySelector("#mainText");
let atkBtn = document.querySelector("#attackButton");
let retreatBtn = document.querySelector('#retreatButton');
let pressedAttack = false;
let pressedRetreat = false;
let currentEnemy = 0; 
let gameInterval;


function gameLoop(){
    if(pressedAttack){
        pressedAttack = false; //turns it back off so we can press it again
        player.attack(enemyShips[currentEnemy]);
        if(enemyShips[currentEnemy].hull <= 0){
            enemyShips[currentEnemy].die();
            currentEnemy++;
        }else{
            enemyShips[currentEnemy].attack();
        }
    }else if(pressedRetreat){
        pressedRetreat = false; //turns it back off so we can press it again
        player.retreat(); 
    }
    if(enemyShips.length <= 0){
        console.log("game over win"); //change this later
        clearInterval(gameLoop);
    }
    if(player.hull <= 0){
        player.die();
        console.log("game over lose"); //change this later
        clearInterval(gameLoop);
    }
    //Micaiah
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