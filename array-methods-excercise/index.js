// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);
// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

function func() {
    var fruit = ["banana", "apple", "orange", "watermelon"];
    var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
    var poppedVegeArr = vegetables.pop();
    var shiftedFruitArr = fruit.shift();
    var orangeIndex = fruit.indexOf("orange");
    fruit.push(orangeIndex);
    var lengthOfVegeArr = vegetables.length;
    vegetables.push(lengthOfVegeArr);
    var food = fruit.concat(vegetables);
    food.splice(4, 2);
    food.reverse();
    var foodToString = food.toString();
    console.log(fruit);
    console.log(vegetables);
    console.log(food);
    console.log(foodToString);
}
func();