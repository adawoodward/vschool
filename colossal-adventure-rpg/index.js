const readline = require('readline-sync');
console.log('The year is 1985. Welcome to the Little Red Riding Hood Game! ');
const name = readline.question('Please enter your name: ');

let playerHp = 100;
let enemyHp = 100;
const prize = ['Rose', 'Muffin', 'Box of Grape juice', 'Wisdom Book'];
const inventory = [];
const prizeDropped = [];
const enemies = ['warewolf', 'troll', 'vampire', 'zombie'];
const randEnemy = [];
const gameActions = ['walk', 'print', 'exit'];


function game() {
    const enemies = ['warewolf', 'troll', 'vampire', 'zombie']

    function randomDamage (min, max) {
        return Math.floor(Math.random() * (25 - 1) + 1);
    }

    let playerRandomDamage = randomDamage(1, 25);
    let enemyRandomDamage = randomDamage(1, 25);

    const randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    const options = readline.keyInSelect(gameActions, "Please choose your next move. You can press '1' for walking, '2' for vewing your status, or '3' for exiting this game. ");
    if (gameActions[options] == 'walk') {
        let randomTime = Math.random();
        if (randomTime <= 0.4) {
            console.log("An enemy, " + randEnemy + " has arrived!!!!!!!!");
            
            while (enemyHp > 0 && playerHp > 0) {
                const enteredOption = readline.keyIn('Press "a" for attack or "r" for running away....', {limit: ['a', 'r']} );
                if (enteredOption == 'a') {

                    console.log(`The ${randEnemy} got ${enemyRandomDamage} amount of damage from your attack!`)
                    console.log(`You got ${playerRandomDamage} damage from ${randEnemy}.`);
                    enemyHp = enemyHp - enemyRandomDamage;
                    playerHp = playerHp - playerRandomDamage;
                    // let totalEnemyHp = 0;
                    // let totalPlayerHp = 0;

                    console.log("The enemy's current Hp: " + enemyHp);
                    console.log("Your current Hp: " + playerHp);
                    if (enemyHp <= 0) { // enemyHp <= 0 
                        let itemRandom = Math.random();
                        let inventory = prize[Math.floor(Math.random() * prize.length)];
                        if (itemRandom) {
                            prizeDropped.push(inventory);
                            playerHp += 5;
                            console.log(`You nailed it! The ${randEnemy} has dropped: ${prizeDropped}, and you have gained 5Hp!`);
                        }
                        console.log('Press [2] print for checking your inventory!');
                        game();
                    } else if (playerHp <= 0) {
                        console.log("Sorry. You are dead. GAME OVER.");
                    }
                } else if (enteredOption == 'r') {
                    const runAway = Math.random();
                    if (runAway < 0.5) {
                        console.log(`The ${randEnemy} has attacked you with ${playerRandomDamage} damage!`);
                    } else {
                        console.log(`Lucky you! You escaped!`);
                        game();
                    }
                }
            }
        } else {
            console.log(`You are walking in the woods...........`);
            game();
        }

    } else if (gameActions[options] == 'print') {
        if (prizeDropped.length == 0) {
            console.log(`${name} got nothing in your inventory.`);
        } else {
            console.log(`${name} got 5 extra points, and awarded with a ${prizeDropped}.`);
            return playerHp = 0;
        }
    } else if (gameActions[options] == 'exit') {
        console.log('GAME OVER');
        return playerHp = 0;
    }
}

while (playerHp > 0) {
    game();
}