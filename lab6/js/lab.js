// Alexander

// Define Variables

myTransport = ["Ford Taurus", "bike", "rides from friends", "Scooter"];

myMainRide = {
  make: "Ford",
  model : "Taurus",
  color : "Rusty",
  year  : 1995,

  age : function() {
    return 2022 - this.year;
  }
}

//Output

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

