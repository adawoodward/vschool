// For this assignment, reference the last two articles. 
// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. 
// Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

// **Extra credit:** Put a countdown timer (10-30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.

// let clicks = 0;
// function clickCounter() {
//     clicks += 1;
//     document.body.textContent = clicks;
// };

// let count = 0;
// document.body.addEventListener("click", function(e) {
//     count ++;
//     document.getElementById("clickcount").innerHTML = count + " clicks";
//     localStorage.setItem("clickcount", count);
// });

// let count = 0;
// let btn = document.getElementById("btn");
// btn.onclick = function() {
//     count++;
//     document.getElementById("clickcount").innerHTML = count;
//     localStorage.setItem("clickcount", count);
// };

let count = 0;
let btn = document.getElementById("btn");

btn.addEventListener("click", clickcount);

function clickcount() {
    count++;
    document.getElementById("clickcount").innerHTML = count + " clicks!";
    localStorage.setItem("clickcount", count);
};

function stopClickcount() {
    document.getElementById("btn").disabled = true;
}

setTimeout(stopClickcount, 10000);
