// The square's color will change as follows:

// - Blue when the mouse hovers over the square
// - Red when the mouse button is held down over the square
// - Yellow when the mouse button is let go over the square
// - Green when the mouse is double clicked in the square
// - Orange when the mouse scroll is used somewhere in the window (not just over the square).
    
//     You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`
// You will need a different event for each event. Keyboard events are triggered by any key.

// `.addEventListener` will be called on your square 6 times.



// function myFunction(){
//     console.log("You clicked me!");
// }

// document.getElementById("this-div").addEventListener('click', function(){
//     console.log("You clicked me!");
// })

var square = document.getElementById("square")

document.getElementById("square").addEventListener('mouseover', function(event) {
    this.style.backgroundColor = "blue";
})


document.getElementById("square").addEventListener('mousedown', function(event) {
    this.style.backgroundColor = "red";
})

document.getElementById("square").addEventListener('mouseup', function(event) {
    this.style.backgroundColor = "yellow";
})

document.getElementById("square").addEventListener('dblclick', function(event) {
    this.style.backgroundColor = "green";
})

document.body.addEventListener('wheel', function(event) {
    this.style.backgroundColor = "orange";
})



// var div = document.getElementById("target");

window.addEventListener(
    "keydown", (keySelect) => {
        if (keySelect.key === "b") {
            (document.getElementById("square").style.backgroundColor = "blue");
        } else if (keySelect.key === "r") {
            document.getElementById("square").style.backgroundColor = "red";
        } else if (keySelect.key === "y") {
            document.getElementById("square").style.backgroundColor = "yellow";
        } else if (keySelect.key === "g") {
            document.getElementById("square").style.backgroundColor = "green";
        } else if (keySelect.key === "o") {
            document.body.style.backgroundColor = "orange";
        }
    }
);

// div.addEventListener(event);

// event.key
