// Tell the user their options:
// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door
// They can't open the door unless they find the key first. They die if they put their hand in the hole.

// - variables
// - booleans
// - if/else if/else OR switch statement
// - `readline-sync` (syntax for installing and using below)


// if(first condition){
//     // This code block executes when the first condition evaluates to true or equivalent result and // then it goes for checking the second condition in the nested loop
//     if(second condition){
//     // This code block executes when the second condition
//     // evaluates to true or equivalent result
//     } else {
//     // This code block executes when the second condition
//     // evaluates to false or equivalent result
//     }
//     } else {
//     // This code block executes when the first condition evaluates to a true or equivalent result
//     }

const readline = require("readline-sync");
const name = readline.question("What is your name? ");


function runGame() {
    console.log("Hello " + name + ", welcome to Escape Room game.");
    while (true) {
        let enteredOperator = readline.keyIn("Choose a number for your option here: 1. Put hand in hole, 2. Find the key, 3. Open the door | Your answer: ")
        if (enteredOperator == 2) {
            console.log("You are OUT! YAY!!");
            break;
        } else if (enteredOperator == 3) {
            console.log("You need to get the key first to open the door!")
        } 
        else  {
            console.log("You are dead. You can not escape this room yet! Try something else!");
        }
    }
}

runGame();