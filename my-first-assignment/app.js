// const myGreeting = document.getElementById("greeting")
// myGreeting.textContent = "Long time no see!"

// myGreeting.textContent = "<h1>Long time no see!</h1>"
// myGreeting.innerHTML = "<h1>Long time no see!</h1>"

// const h1 = document.createElement("h1")
// h1.textContent = "Long time no see!"
// myGreeting.appendChild(h1)
// console.dir(myGreeting)

// const animals = ["dog", "cat", "mouse"];
// animals.sort();
// document.getElementById("list").innerHTML += animals.join(", ");
// console.log(animals);


// <div id="greeting">Hello!</div>
// const myGreeting = document.getElementById("greeting")
// const h1 = document.createElement("h1")
// h1.textContent = "Long time no see!"
// myGreeting.appendChild(h1)



// ***The closest one!!***
// const animals = ["dog", "cat", "mouse"];
// const myList = document.getElementById("list")
// const li = document.createElement("li")
// for (var i = 0; i < animals.length; i++) {
//     myList.innerHTML += "<li>" + animals[i] + "</li>";
// } 
// console.log(myList);


// The best one!********
const animals = ["dog", "cat", "mouse"];
const myList = document.getElementById("list")
const li = document.createElement("li")
var x ="";
for (var i = 0; i < animals.length; i++) {
    x = x + "<li>" + animals[i] + "</li>";
} 
document.getElementById("list").innerHTML = x;



// The second closest one!**
// const animals = ["dog", "cat", "mouse"];
// var animalsList = document.getElementById("list"); // parent list name - animalsList
// const newAnimalsList = document.createElement("li"); // child list name - newAnimalsList
// for (var i = 0; i < animals.length; i++) {
//     newAnimalsList.innerHTML += "<li>" + animals[i] + "</li>";
// } 
// document.getElementById("list").appendChild(newAnimalsList);


