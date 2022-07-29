var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert() {
    // e.preventDefault();
    // var firstName = document.getElementsByName("first-name").value;
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    // var lastName = document.getElementsByName("last-name");
    var age = form.elements["age"].value;
    // var age = document.getElementsByName("age");
    var gender = form.elements["gender"].value;
    // var gender = document.getElementsByName("gender");
    // var select = document.getElementsByName("travel-location")
    var location = form.elements["travel-location"].value;
    // var location = document.getElementsByName("travel-location");
    var diet = [];
    // var veganCheckBox = document.getElementById("vegan");
    // var glutenCheckBox = document.getElementById("gluten");
    // var paleoCheckBox = document.getElementById("paleo");
    if (document.getElementById('vegan').checked == true) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById('gluten').checked == true) {
        diet.push(document.getElementById("gluten").value);
    }
    if (document.getElementById('paleo').checked == true) {
        diet.push(document.getElementById("paleo").value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);