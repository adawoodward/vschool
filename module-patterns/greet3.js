var greeting = "Hello world!!!"

function greet() {
    console.log(greeting)
}

// Replace module.exports object with my own object that just contains the one
// function. Even though I'm only exposing the one greet function, it still has
// access to all the other functions, login, variables, etc. within this file.
// This way, I can make it so I'm only exposing that which I want to expose
// when require() is called.

module.exports = {
    greet: greet
}