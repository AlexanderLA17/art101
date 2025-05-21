/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Alexander Adams
   Date: 2025
*/

$(document).ready(function() {

  function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

 
  function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
  }


  $("#submit").click(function() {
    const userName = $("#user-name").val();
    const userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });


  $("#make-convo").click(function() {
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
  });
});