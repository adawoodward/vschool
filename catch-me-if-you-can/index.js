// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
// 1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. Use `console.log` within a `catch` block to inform the user of the error.

function sum(x, y){
    //check data types first and throw error
    return x + y;
}
try {
    // let x = 1; 
    let x = [1, 2];
    let y = 2;
    if (typeof (x) == 'number' && typeof (y) == 'number'){
        console.log(sum(x, y));
    } else {
        throw "Error: This is not number!"
    }
} catch(err){
    console.log(err)
}

// 2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`
// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   //check credentials
// }

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
// let user = {username: "sam", password: "123abc"};
// function login(username, password){
//     if (username == "sam" && password == "123abc"){
//         console.log("login successful")
//     } else {
//         throw "Error: This is incorrect one!"
//     }
// }
// try {
//     let username = "sam";
//     let password = "123abc"
//     if (username == "sam" && password == "123abc"){
//         throw "Correct username/password";
//         // console.log(login(username, password))
//     } else {
//         throw "Incorrect username/password";
//     } 
// } catch(err){
//     console.log(err)
// }