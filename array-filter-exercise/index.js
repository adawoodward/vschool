// Use the built-in array method .filter() to solve all of these problems

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// let arr = [3, 6, 8, 2];
// function fiveAndGreaterOnly(arr) {
//     // your code here
//     return arr.filter(function(num){
//         if (num >= 5) {return num};
//     })
// }

// // function fiveAndGreaterOnly(arr) {
// //     // your code here
// //     return arr.filter((num) => num >= 5);
// // }

// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// 2) Given an array of numbers, return a new array that only includes the even numbers.
// let arr = [3, 6, 8, 2];
// // function evensOnly(arr) {
// //     // your code here
// //     return arr.filter(function(num){
// //         if (num % 2 === 0) {
// //             return num
// //         }
// //     }) 
// // }

// function evensOnly(arr) {
//     return arr.filter(num => num % 2 === 0)
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// let arr = ["dog", "wolf", "by", "family", "eaten", "camping"]
// // function fiveCharactersOrFewerOnly(arr) {
// //     // your code here
// //     return arr.filter(function(word){
// //         if (word.length <= 5){
// //             return word;
// //         }
// //     })
// // }

// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter(word => word.length <=5)
// }

//   // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// let arr = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// function peopleWhoBelongToTheIlluminati(arr){
//     // your code here
//     return arr.filter(function(person){
//         if (person.member !== false){
//             return person
//         }
//     })
// }

// // function peopleWhoBelongToTheIlluminati(arr){
// //     // your code here
// //     return arr.filter(person => person.member !== false)
// // }
//   // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
//   // =>
//   //[ { name: 'Angelina Jolie', member: true },
//   //  { name: 'Paris Hilton', member: true },
//   //  { name: 'Bob Ziroll', member: true } ]

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let arr = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

// function ofAge(arr){
//     // your code here
//     return arr.filter(function(person){
//         if (person.age > 16){
//             return person
//         }
//     })
// }

function ofAge(arr){
    return arr.filter(person => person.age >16)
}
  // test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
