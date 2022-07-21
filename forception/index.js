var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var upperAlphabet = alphabet.toUpperCase();
var alphabetArr = upperAlphabet.split('');

function forception(people, alphabet){
    var arr = [];
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

    for (var i = 0; i < people.length; i++) {
        // console.log(people[i] + ":")
        arr.push(people[i] + ':')
        for (var j = 0; j < alphabetArr.length; j++) {
            // console.log(alphabetArr[j]);
            arr.push([alphabetArr[j]]);
        }
    }
    const flatArray = arr.flat();
    console.log(flatArray);
    // return arr; 
}
console.log(forception(people, alphabet));