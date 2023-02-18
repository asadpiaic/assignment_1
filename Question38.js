"use strict";
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
