// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data`, add a row to the table for each UFO sighting
data.array.forEach(function(UFOsighting) => {
    console.log(UFOsighting);
    var row=tbody.append('tr');

    Object.entries(UFOsighting).forEach(function([key, value]) {
        console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.