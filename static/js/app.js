// Level 1 & Level 2 - multiple search criteria to filter table

// from data.js - save data var to a new var to protect original data
var tableData = data;

// get reference to the table body in html
var tbody = d3.select("tbody");
// console.log(data);

// loop through data to create table update each cell w/ data from data.js
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// form input
// select the button & form
var button = d3.select("#filter-btn")
var resetButton = d3.select("#reset-filter-btn")

// create event handlers 
button.on("click", function() {

  // remove any existing table
  d3.select("tbody").html("");

  // prevent page refresh
  d3.event.preventDefault();

  // select each table element from filter
  // set all text to lowercase
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value").toLowerCase();
  var state = d3.select("#state").property("value").toLowerCase();
  var country = d3.select("#country").property("value").toLowerCase();
  var shape = d3.select("#shape").property("value").toLowerCase();

  // save data as new variable
  filterData = tableData;

  // filter by search input
  if (date) {
    filterData = filterData.filter(record => record.datetime === date);}
  if (city) {
    filterData = filterData.filter(record => record.city === city);}
  if (state) {
    filterData = filterData.filter(record => record.state === state);}
  if (country) {
    filterData = filterData.filter(record => record.country === country);}
  if (shape) {
    filterData = filterData.filter(record => record.shape === shape);}

  // Display the filtered table
  filterData.forEach((report) => {
    var row = tbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    }); }); });

//Resest the filter
resetButton.on("click", () => {
	tbody.html("");
	tableData.forEach((report) => {
    //console.log(report);
    var row = tbody.append('tr');
 
// Build table
Object.entries(report).forEach(([key, value]) => {
    //console.log(key, value);
    var cell = row.append('td');
    cell.text(value);
    }); });

console.log("Table reset") });