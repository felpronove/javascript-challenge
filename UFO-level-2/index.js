// PHASE 1

// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// Assign the data from `data.js` to a descriptive variable
var UFOsighting = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// build a table to show all data results
// table needs to clear previousl results with each search
// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Create a function to create a table with all returned UFO entries
function createTable(UFOdata){
    // clear table of all previous searches
    tbody.html("")
    // Loop through each data entry to create a table row for each entry
    UFOdata.forEach((sighting) => {
        console.log(sighting);
        var row=tbody.append('tr');
    // Add table columns for each key value pair in each entry
        Object.values(sighting).forEach((value) =>{
            console.log(value);
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
// Use a date form in your HTML document and write JavaScript code that will listen for events
// Search through the `date/time` column to find rows that match user input.

// create a function that will create a filter for datetime 
function DateFilter(){
    // pull data for UFO sightings 
     var filterDateTime = UFOsighting
     d3.event.preventDefault();

     // Set up a variable to hold the datetime entered by user
     var userDateTime=d3.select("#datetime").property("value");

     // Use input from field to filter the data for datetime
     // if user enters a datetime, filter data to include sightings that match the criteria
     if(userDateTime) {
         filterDateTime=filterDateTime.filter(item => item.datetime===userDateTime);
     };

     // run the createTable function with the filtered data
     createTable(filterDateTime);
}

// Create event handlers for clicking the button or pressing the enter key
d3.select("#filter-btn").on("click", DateFilter);
d3.select("#form").on("submit", DateFilter);

// PHASE 2
// Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings

// create a function that will create a filter for city 
function CityFilter(){
    // pull data for UFO sightings 
     var filterCity = UFOsighting
     d3.event.preventDefault();

     // Set up a variable to hold the city entered by user
     var userCity=d3.select("#city").property("value");

     // Use input from field to filter the data for city
     // if user enters a city, filter data to include sightings that match the criteria
     if(userCity) {
         filterCity=filterCity.filter(item => item.city===userCity);
     };

     // run the createTable function with the filtered data
     createTable(filterCity);
}

// Create event handlers for clicking the button or pressing the enter key
d3.select("#city-filter-btn").on("click", cityFilter);
d3.select("#form").on("submit", cityFilter);

// create a function that will create a filter for state 
function StateFilter(){
    // pull data for UFO sightings 
     var filterState = UFOsighting
     d3.event.preventDefault();

     // Set up a variable to hold the state entered by user
     var userState=d3.select("#state").property("value");

     // Use input from field to filter the data for state
     // if user enters a state, filter data to include sightings that match the criteria
     if(userState) {
         filterState=filterState.filter(item => item.state===userState);
     };

     // run the createTable function with the filtered data
     createTable(filterState);
}

// Create event handlers for clicking the button or pressing the enter key
d3.select("#state-filter-btn").on("click", StateFilter);
d3.select("#form").on("submit", StateFilter);

// create a function that will create a filter for country 
function CountryFilter(){
    // pull data for UFO sightings 
     var filterCountry = UFOsighting
     d3.event.preventDefault();

     // Set up a variable to hold the country entered by user
     var userCountry=d3.select("#country").property("value");

     // Use input from field to filter the data for country
     // if user enters a country, filter data to include sightings that match the criteria
     if(userCountry) {
         filterCountry=filterCountry.filter(item => item.country===userCountry);
     };

     // run the createTable function with the filtered data
     createTable(filterCountry);
}

// Create event handlers for clicking the button or pressing the enter key
d3.select("#country-filter-btn").on("click", CountryFilter);
d3.select("#form").on("submit", CountryFilter);

// call build table function no matter if filter function goes or not

// Run createTable function for entire dataset if no filter has been selected
createTable(UFOsighting);