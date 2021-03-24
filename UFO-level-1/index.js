// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data
console.log(data);

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
data.array.forEach(function(UFOsighting) => {
    console.log(UFOsighting);
    var row=tbody.append('tr');

    Object.entries(UFOsighting).forEach(function([key, value]) {
        console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen for events
// Search through the `date/time` column to find rows that match user input.