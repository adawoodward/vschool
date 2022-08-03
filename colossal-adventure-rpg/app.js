// 1. Console must greet player with a fun message
// 2. Console must ask for the player's name and store it
// 3. Walking:
//      - The console will ask the user to enter a "w" to walk
//      - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//      - Use a while loop to control this flow.
// 4. If a wild enemy appears:
//      - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//      - The user can decide to attack or run
//      - If attacking, a random amount of damage will be dealt between a min and max
//      - If running, there will be a 50% chance of escaping
//      - After the player attacks or runs the enemy attacks back for a random damage amount
//      - The player and enemy will attack each other in a loop until one of them passes out or dies.
//      - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
//      - If the enemy kills the player the console prints a cool death message and the game ends.
// 5. Inventory
//      - When the player kills enemies, they are awarded with items
//      - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory

// let playerName = readline.question("What is your name? ");

const readline = require("readline-sync");
console.log("Hello, welcome to Little Red Riding Hood Game!");
let playerName = readline.question("What is your name?: ");
const treasure = ['roses', 'muffins', 'chocolates', 'juice'];
let inventory = [];
let playerHp = 100;
let beastHp = 100;
let hasHealed = false;
function startGame() {
    console.log("Hey " + playerName + ", let's start this game!");
    console.log("You can walk, attack, run, and check your inventory.");
    walk();
}
startGame();

function walk() {
        let walking = readline.keyIn("Let's start walking now. Press 'w' for walking. ", {limit: 'w'} )
    // let enteredOption = readline.keyIn("Your option is 'a'ttack or 'r'unning. ", {limit: ['a', 'r']})
        if (walking == 'w') {
            console.log("Walking now in the forest...............................");
        }
}


// const beastInterval = setInterval(showBeast, 5000);

function randomDamage (min, max) {
    return Math.floor(Math.random() * (25 - 1) + 1);
}




function shuffleBeasts(beasts) {
    for (let i = beasts.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = beasts[i];
        beasts[i] = beasts[j];
        beasts[j] = temp;
    }
    return beasts;
}


let keepLooping = true;
(function ontimeout(){
    if (keepLooping) {
        let beasts = ['warewolf', 'troll', 'vampire', 'zombie'];
        let newBeasts = shuffleBeasts(beasts);
        let beast = newBeasts[0];
        let random = Math.round(Math.random()*10);
        setTimeout(ontimeout, Math.random()*100);
        function alertBeast() {
            console.log("The " + beast + " is trying to attack you now!!!!!!!!!!!!!!!! ");
            console.log("After " + random + " secs, the enemy appeard!");
        }
        alertBeast();
    }
})();

// (function loop() {
//     var random = Math.round(Math.random() * 10);
//     setTimeout(function() {
//         alertBeast();
//         console.log("After " + random + " secs, the enemy appeard!");
//         loop();
//     }, random*1000);}());


function attackBeast() {
    // alertBeast();
    let enteredOption = readline.keyIn("Your option here is 'a' for attack or 'r' for running. ", {limit: ['a', 'r']})
    if (enteredOption == 'a') {
        console.log("You are attacking now.")
        console.log(`The enemy got ${randomDamage(1, 25)} amount of damage!`)
        attack();
    } else if (enteredOption == 'r') {
        console.log("You are running now.")
    }
}
attackBeast();


const chance = Math.floor(Math.random() * 11);
if (chance >= 3) { // 70% chance beast will appear
    showBeast();
} else {
    console.log("Peaceful for now.")
}




function attack() {
    // randomDamage min max
    if (totalDamage >= 100) {
        console.log("You are the winner")
    }
    if (playerHp < 0) { // Or yourDamage < 0
        console.log("Game Over. You are dead......")
    }
}



// function attack() {
//     let enteredKey = readline.keyIn("Press 'a' for attacking and 'r' for running!")
//     if (enteredKey == 'a') {

//     }
// }

// let hp = 100

// function walk(){
//     const willFight = prompt('(f) for fighting, (i) for checking inventory')
//     if(willWalk === "f"){
//         fight()
//     } else if (willWalk === "i"){
//         checkInventroy()
//     } 
// }

// function fight(){
//     const winner = selectWinner()
// }

// while(hp > 0){
//     walk()
// }


// function ask(question) {
//     readline.question(question, (answer) => {
//         readline.write(`Hey ${answer}, let's start the game now`)
//         ask(question)
//     })
// }
// ask("What is your name: ")

// console.log("Hey " + answer + ", let's start this game now!")
// let rl = readline.createInterface(process.stdin, process.stdout);
// rl.question("What is your name? ", function(answer) {
//     console.log("Lets start new game now!")
//     rl.close();
// });