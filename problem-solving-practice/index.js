// 1. Write a function that takes an array of numbers and returns the largest (without using Math.max())

// function largest(arr) {
//     let num = 0;
//     for (let i = 0; i < arr.length; i++){
//       if (arr[i] >= num){
//         num = arr[i];
//       }
//     }
//     return num;
//   }
  
// const arr = [1, 141, 23, 10, 9, 92];
// console.log(largest(arr));

// 2. Write a function that takes an array of words and a character and returns each word that has that character present.
// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 


// let array = ["#3", "$$$", "C%4!", "Hey!"];
// let string = "!";
// const filteredArray = array.filter(function(arr) {
//     return arr.includes(string);
// });
// console.log(filteredArray);

// This is not a function 
// result = arr.filter(element => element.includes(character));
// console.log(result)

// 3. Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    } else return false;
}

isDivisible(4, 2)