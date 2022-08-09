const form = document.invoice;

form.addEventListener('submit', function(e){
    e.preventDefault();
    let num1 = document.invoice.num1.value;
    let num2 = document.invoice.num2.value;
    let num3 = document.invoice.num3.value;
    const goombaPrice = num1 * 5;
    const bobombPrice = num2 * 7;
    const cheepcheepPrice = num3 * 11;
    const total = goombaPrice + bobombPrice + cheepcheepPrice;
    document.getElementById("total").textContent = "" + total + " coins" + " ( " + goombaPrice + " + " + bobombPrice + " + " + cheepcheepPrice + " ) "; 
})