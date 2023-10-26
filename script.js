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
    retreat(){
        
    }
}


let enemyShips = [];
let player = new Player(20, 5, .7);
for(let i = 0; i < 6; i++) enemyShips.push(new EnemySpaceShip(getRandomInt(3,7), 3, getRandomInt(6,9)/10));

// To access a ship: enemyShips[number]

function gameLoop(){
    //Micaiah
}
