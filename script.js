//function to generate a random number btn 0.6 and 0.8
function getRandomInt(min, max) {
    //BY RANI
    min = Math.ceil(min);
     max = Math.floor(max);
    // removed the Math.floor
    return(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    
}
const randAccuracy = getRandomInt(6, 8)

// console.log(dec)

class EnemySpaceShip{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(){
        //Rani
        // Make sure to program in an if statement checking if you miss or not
    }
    die(){
        //Rani
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

        } else return false //miss the target
        //Rani
        // Make sure to program in an if statement checking if you miss or not
    }
    die(){
        //Rani
    }
    retreat(){
        //Sarah
    }
    retreat(){
        
    }
}

// Setting up all of the classes needed for the game.

//Player(hull, firepower, accuracy)
//Player.hull, Player.firepower, etc.
//Enemy(hull, firepower, accuracy)

let enemyShips = [];
let player = new Player();
for(let i = 0; i < 6; i++) enemyShips.push(new EnemySpaceShip(getRandomInt(3,6), 3, getRandomInt(6,8)/10));
let textDisplay = document.querySelector("#mainText");
// To access a ship: enemyShips[number]

function gameLoop(){
    //Micaiah
    for(let x of enemyShips){
        //You attack the first alien ship
        //If the ship survives, it attacks you
        //If you survive, you attack the ship again
        //If it survives, it attacks you again ... etc
        //If you destroy the ship, you have the option to attack the next ship or to retreat
        //If you retreat, the game is over, perhaps leaving the game open for further developments or options
        //You win the game if you destroy all of the aliens
        //You lose the game if you are destroyed
    }
}
