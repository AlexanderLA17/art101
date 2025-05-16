/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Alexander Adams
   Date: 2025
*/

$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Solve It</button>");
$("#results").append("<button id='button-results'>Reveal Results</button>");

// Add click listener for the challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});

// Add click listener for the problems button
$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

// Add click listener for the results button
$("#button-results").click(function(){
    $("#results").toggleClass("special");
});

