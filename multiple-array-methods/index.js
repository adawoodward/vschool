// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1.(filter? reduce?) Returns a list of everyone older than 18, which is
// 2.(sort?) sorted alphabetically by last name, and where
// 3.(map?) each name and age is embedded in a string that looks like an HTML `<li>` element.
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
// * Extra Credit *
// - Create another array of one or more individuals and add it to the original array.
// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// - Remove the second individual from the array.
// - Return the array in reverse order.

//  final.push("<li>" + person.firstName + person.lastName + " is " + age + "</li>");
//  return final;

//  function alphabetical(arr) {
//     return arr.sort();
//  }

function sortedOfAge(arr){
    // Your code here 
    const result = peopleArray.filter(person => person.age > 18)
    // return result;
    
    const secondResult = result.sort(function(a, b){
        if (a.lastName < b.lastName){
            return -1;
        }
        if (a.lastName > b.lastName){
            return 1;
        }
        return 0;
    })

    const concatArr = secondResult.concat(arr2);

    const thirdResult = concatArr.filter(function(person){
        if (!person.lastName.match(/y$/)) {
            return person;
        }
    })

    const fourthResult = thirdResult.reverse();

    return lastResult = fourthResult.map(function(person){
        return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>";
    })
}

const arr2 = [{firstName: "Ada", lastName: "Woodward", age: 37}]

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

console.log(sortedOfAge(peopleArray));
 

 