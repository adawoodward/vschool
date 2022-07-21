// capilizeAndLowercase("HelLo") // => "HELLOhello"
// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// var word = "HelLo";
// function func() {
//     var upperWord = word.toUpperCase();
//     var lowerWord = word.toLowerCase();
//     console.log(upperWord + lowerWord);
// }
// func();

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5
// Hint: You'll need to use Math.floor().

// var word = "Hellooo"
// function findMiddleIndex() {
//     var len = word.length;
//     var halfOfLen = len / 2;
//     var roundedLen = Math.floor(halfOfLen); 
//     console.log(roundedLen);
// }

// findMiddleIndex();

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"
// var word = "Hello World";
// function returnFirstHalf() {
//     var len = word.length;
//     var halfOfLen = len / 2;
//     var roundedLen = Math.floor(halfOfLen);
//     var result = word.slice(0, roundedLen);
//     console.log(result);
// }

// returnFirstHalf();

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// var word = "Hello World";
// function capilizeAndLowercase() {
//     var len = word.length;
//     var halfOfLen = len / 2;
//     var roundedLen = Math.floor(halfOfLen);
//     var firstHalf = word.slice(0, roundedLen);
//     var secondHalf = word.slice(roundedLen);
//     var upperFirstHalf = firstHalf.toUpperCase();
//     var lowerSecondHalf = secondHalf.toLowerCase();
//     console.log(upperFirstHalf + lowerSecondHalf);
// }

// capilizeAndLowercase();


// Optional Code Challenge
// (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"