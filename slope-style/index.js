// Use the Rest Operator
// function collectAnimals(...animal) {
//     /*and here*/
//     return animal;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]));

// {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
// }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
// }
  
// console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
// }));

// Use array destructuring to make this code ES6:
// function returnFirst(items){
//     // const firstItem = items[0]; /*change this line to be es6*/
//     const [firstItem] = arr;
//     return firstItem;
// }

// const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr
// does the same thing as:
// const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]

// const arr = ["important", "skip", "important"]
// const [nameFirstItemHere, nameSecondItemHere, nameThirdItemHere] = arr;
// console.log(nameSecondItemHere);

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     let firstFav = "magnets";
//     let secondFav = "snowboarding";
//     let thirdFav = "philanthropy";
//     return`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}.`;
// }

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
// function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {
//     return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6y:

// function product(...numbers) {
//     // let numbers = [a, b, c, d, e]; 
//     return numbers.reduce((acc, number) => acc * number, 1)
// }
// console.log(product(3, 4));

// Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
// }

// const array2 = ['a', 'b', "c", "d", "e"];
  
// function unshift(array, ...array2) {
//     return [array, ...array2];
// }
// console.log(unshift(1, 2, 3, 4, ...array2));
  
// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        let firstName = name[0];
        let lastName = name[1];
// const [varIMakeUpRightHereForTheFirstItemInTheArray] = arr
// does the same thing as:
// const varIMakeUpRightHereForTheFirstItemInTheArray = arr[0]
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]