// You should collect the following information from the user:

// - First name (text input)
// - Last name (text input)
// - Age (number input)
// - Gender (radio buttons with 2 or more options)
// - Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// - Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

// Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.
// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:
// Style the form to be user friendly and welcoming. 

const form = document.travelForm;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.location.value;
    let checkedDietary = [];
    for (let i = 0; i < form.dietary.length; i++){
        if (form.dietary[i].checked){
            checkedDietary.push(form.dietary[i].value);
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDietary restrictions: " + checkedDietary + "\n");
})
