// **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`

// 1.
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// 2.
for (var i = 9; i >= 0; i--) {
    console.log(i)
}

// 3.
const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

// 1.
var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(i)
}

// 2. 
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 3.
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var arr = [];
for (var i = 0; i < fruits.length; i+=2) {
    arr.push(fruits[i])
}
console.log(arr);


// **Silver Medal**

// 1. Write a loop that will print out all the names of the people of the people array
// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.


// 1. 
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

var names = [];
var ocupations = [];
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    ocupations.push(peopleArray[i].occupation)
}

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

var names = [];
var ocupations = [];
for (var i = 0; i < peopleArray.length; i+=2) {
    names.push(peopleArray[i].name)
    for (var j = 1; j < peopleArray.length; j+=2) {
        ocupations.push(peopleArray[j].occupation)
    }
}
console.log(names);
console.log(ocupations);