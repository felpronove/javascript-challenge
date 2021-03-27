// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Assign the data from `data.js` to a descriptive variable
var UFOsighting = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// build a table to show all data results
// table needs to clear previousl results with each search
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Create a function to create a table with all returned UFO entries
function createTable(UFOdata){
    // Loop through each data entry to create a table row for each entry
    UFOdata.forEach((sighting) => {
        console.log(sighting);
        var row=tbody.append('tr');
    // Add table columns for each key value pair in each entry
        Object.values(sighting).forEach((value) {
            console.log(value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
// Use a date form in your HTML document and write JavaScript code that will listen for events
// Search through the `date/time` column to find rows that match user input.

// create a function that will create a filter for datetime 
function DateFilter(datetime){
     // Use input from field to filter the data for datetime
     var filterDateTime = alienReporting
     d3.event.preventDefault();

     // Set up a variable to hold the datetime entered by user
     var userDateTime=d3.select("datetime").property("value");

     // if user enters a datetime, filter data to include sightings that match the criteria
     if(userDateTime) {
         filterDateTime=filterDateTime.filter(item => item.datetime===userDateTime);
     };

     // run the createTable function with the filtered data
     createTable(filterDateTime);
}

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", //filterfunction);
form.on("submit", //filterfunction);

// call build table function no matter if filter function goes or not

// Run createTable function for entire dataset if no filter has been selected
createTable(UFOsighting);