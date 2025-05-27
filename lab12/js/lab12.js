$(document).ready(function() {
  // Given a number, return a house.
  function getHouse(num) {
    let remainder = num % 4;
    let str = "";

    if (remainder == 0) {
      str = "House of Elrond: Known for wisdom, leadership, and the sanctuary of Rivendell.";
    } else if (remainder == 1) {
      str = "House of Durin: Known for strength and endurance.";
    } else if (remainder == 2) {
      str = "House of Beren: Famous for courage and loyalty.";
    } else if (remainder == 3) {
      str = "House of Feanor: Ambition, creativity, and fiery spirit.";
    }

    return str;
  }

  // Attach click handler to button
  $("#button").click(function() {
    // Get value
    let name = $("#input").val();
    console.log(name);

    // Get length
    let nameLength = name.length;
    console.log(nameLength);

    // Get house
    let house = getHouse(nameLength);
    console.log(house);

    // Add house to output
    $("#output").html("<h1>" + house + "</h1>");
  });
});