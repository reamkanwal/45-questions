// q38:
function describeCity(nameofcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
;
// 3cities
var city1 = describeCity("Karacchi");
var city2 = describeCity("hyderabad");
var city3 = describeCity("lahore");
var city4 = describeCity("dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
