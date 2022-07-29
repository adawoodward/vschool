// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


// for (var i = 1; i <= 100; i++) {
//     console.log(i);
// }

var output = [];

function fizzBuzz() {
    for (var i = 1; i < 101; i++) {
        // let numbers = '';
        if (i % 3 === 0 && i % 5 === 0) {
            output += "Fizzbuzz";
        } else if (i % 3 == 0) {
            output += "fizz"
        } else if (i % 5 == 0) {
            output += "Buzz";
        } else {
            output += i
        }
    }
        console.log(output);
}

fizzBuzz();

let resultOfFizzbuzz = output.match(/Fizzbuzz/g).length;
let resultOfFizz = output.match(/fizz/g).length;
let resultOfBuzz = output.match(/Buzz/g).length;
let result = {};
result.fizzbuzz = resultOfFizzbuzz;
result.fizz = resultOfFizz;
result.buzz = resultOfBuzz;
console.log(result);


