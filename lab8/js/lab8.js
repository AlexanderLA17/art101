// Alexander


function isEven(x){
  return (x % 2 == 0);
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

let array = [100, 81, 4, 16, 42, 144, 10000];
console.log("My array", array);

let result = array.map(isEven);
console.log("Test of evenness of array", result);

result = array.map(function(x){
  return x ** 0.5;
});
console.log("Squareroot of array:", result);

// Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);