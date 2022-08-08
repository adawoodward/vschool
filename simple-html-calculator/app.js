// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors
// - Your website will have proper padding/spacing to lay things out nicely

// const form = document["calculator"]
const form = document.calculator;

form.addEventListener("submit", function(e){
    e.preventDefault();
    // // add
    // let num1 = document.calculator.num1.value;
    // let num2 = document.calculator.num2.value;
    // const sum = parseInt(num1) + parseInt(num2);
    // let sumDiv = document.createElement("div");
    // sumDiv.textContent = sum;
    // document.getElementById("add").append(sumDiv);
    // document.calculator.num1.value = "";
    // document.calculator.num2.value = "";

    // // substract
    // let num3 = document.calculator.num3.value;
    // let num4 = document.calculator.num4.value;
    // let difference = parseInt(num3) - parseInt(num4);
    // let differenceDiv = document.createElement("div");
    // differenceDiv.textContent = difference;
    // document.getElementById("substract").append(differenceDiv);
    // document.calculator.num3.value = "";
    // document.calculator.num4.value = "";

    // // multiply
    // let num5 = document.calculator.num5.value;
    // let num6 = document.calculator.num6.value;
    // let multiplied = num5 * num6;
    // let multipliedDiv = document.createElement("div");
    // multipliedDiv.textContent = multiplied;
    // document.getElementById("multiply").append(multipliedDiv);
    // document.calculator.num5.value = "";
    // document.calculator.num6.value = "";
    
    // // We don't need this for form...
    // const addBtn = document.getElementById("addBtn");
    // const substractBtn = document.getElementById("substractBtn");
    // const multiplyBtn = document.getElementById("multiplyBtn");

    form.addEventListener('submit', function(){
        let num1 = document.calculator.num1.value;
        let num2 = document.calculator.num2.value;
        const sum = parseInt(num1) + parseInt(num2);

        document.getElementById("sum").textContent = sum;
        p.append(sum);
        document.calculator.num1.value = "";
        document.calculator.num2.value = "";
    })

    form.addEventListener('submit', function() {
        let num3 = document.calculator.num3.value;
        let num4 = document.calculator.num4.value;
        let difference = parseInt(num3) - parseInt(num4);

        document.getElementById("difference").textContent = difference;
        p.append(difference);
        document.calculator.num3.value = "";
        document.calculator.num4.value = "";
    })

    form.addEventListener('submit', function() {
        let num5 = document.calculator.num5.value;
        let num6 = document.calculator.num6.value;
        let multiplied = parseInt(num5) * parseInt(num6);

        document.getElementById("multiplied").textContent = multiplied;
        p.append(multiplied);
        document.calculator.num5.value = "";
        document.calculator.num6.value = "";
    })
})

