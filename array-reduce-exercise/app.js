// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
    // code goes here
    return words.filter(function(word){
        if (word.indexOf(' ') < 0) {
            return word
        }
    })
}

// function hasWhiteSpace(s) {
//     return s.indexOf(' ') >= 0;
// }

// str = "Hello"
// str.indexOf("H")
// // 0
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]