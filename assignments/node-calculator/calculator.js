 var readline = require('readline-sync');
 var userName = readline.question('May I have your name? ');
 console.log('Hi ' + userName + '!');

 // - A function that adds two numbers and returns the result
// - A function that multiplies two numbers and returns the result
// - A function that divides two numbers and returns the result
// - A function that subtracts two numbers and returns the result
// - Each function will have 2 parameters, `num1`, `num2`
// - On the console the prompt will print to the user:
// - *Please enter your first number* (store that number)
// - *Please enter your second number* (store that number)
// - *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
// - Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// - You will then print to the console: *The result is: [the result]*

//test
var firstNumber = readline.question('Please enter your first number: ');
var secondNumber = readline.question('Please enter your second number: ');
// var enteredOperator = readline.question('Please enter the operation to perform: add, sub, mul, div. ');
const enteredOperator = readline.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? ")
if (enteredOperator == "a"){
    console.log("The result is: " + (parseInt(firstNumber)+parseInt(secondNumber)))
} else if (enteredOperator == "s"){
    console.log("The result is: " + (firstNumber-secondNumber))
} else if (enteredOperator == "m"){
    console.log("The result is: " + (firstNumber*secondNumber))
} else if (enteredOperator == "d"){
    console.log("The result is: " + (firstNumber/secondNumber))
};
