// q38:

function describeCity(nameofcity: string , country: string = "Pakistan"){
    return `${nameofcity} is in ${country}`;
};
// 3cities

let city1 = describeCity ("Karacchi");
let city2 = describeCity ("hyderabad");
let city3 = describeCity ("lahore");
let city4 = describeCity ("dubai","UAE");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

