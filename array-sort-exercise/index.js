// Use the built-in .sort() method on arrays to solve these problems.

// 1) Sort an array from smallest number to largest

// let arr = [1, 3, 5, 2, 90, 20];
// function leastToGreatest(arr) {
//     // your code here
//     return arr.sort(function(a, b){
//         return a - b;
//     })
// }
  
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// 2) Sort an array from largest number to smallest

// function greatestToLeast(arr) {
//     // your code here
//     return arr.sort(function(a, b){
//         return b - a;
//     })
// }
  
// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// 3) Sort an array from shortest string to longest

// let arr = ["dog", "wolf", "by", "family", "eaten"];
// function lengthSort(arr) {
//     // your code here
//     return arr.sort(function(a, b){
//         return a.length - b.length; 
//     })
// }
  
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

// 4) Sort an array alphabetically
// let arr = ["dog", "wolf", "by", "family", "eaten"];
// function alphabetical(arr) {
//     return arr.sort();
// }

// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

// 5) Sort the objects in the array by age

let arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

// function byAge(arr){
//     // your code here
//     return arr.sort(function(a, b){
//         return a.age - b.age
//     })
// }

function byAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}

// items.sort((a, b) => a.value - b.value);

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]