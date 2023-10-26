function getRandomInt(min, max) {
    //BY RANI
    // min = Math.ceil(min);
    // max = Math.floor(max);
    // removed the Math.floor
    return (Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

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
let player = new Player(20, 5, .7);
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
