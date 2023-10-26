function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class EnemySpaceShip{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(){
        //somebody does this
        // Make sure to program in an if statement checking if you miss or not
    }
    die(){
        //somebody does this
    }

}

class Player{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(){
        //somebody does this
        // Make sure to program in an if statement checking if you miss or not
    }
    die(){
        //somebody does this
    }
}


let enemyShips = [];
let player = new Player(20, 5, .7);
for(let i = 0; i < 6; i++) enemyShips.push(new EnemySpaceShip(4, 3, .7));

// To access a ship: enemyShips[number]

function gameLoop(){
    //Micaiah
}
