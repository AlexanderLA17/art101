/*
 * fizzbuzz.js
 * Author: [Your Name]
 * Date: [Today's Date]
 * Description:
 * This program loops through numbers 1 to 200 and prints:
 * - "Fizz!" if divisible by 3
 * - "Buzz!" if divisible by 5
 * - "Boom!" if divisible by 7
 * - Combines messages if divisible by multiple (e.g. "FizzBuzz!")
 * The result is output to the #output div on the web page.
 */

// Function to perform FizzBuzzBoom logic
function fizzBuzzBoom() {
    let oneLongString = "";

    for (let i = 1; i <= 200; i++) {
        let str = "";

        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Boom";
        }

        // Add the number if no match
        if (str === "") {
            str = i;
        }

        oneLongString += str + "<br>";
    }

    // Output to the div with id="output"
    $("#output").html(oneLongString);
}

// Call the function after the page is loaded
$(document).ready(function () {
    fizzBuzzBoom();
});
