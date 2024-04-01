//  q44:
//  array as a parameter
function mysandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return " i want sandwich of ".concat(items);
}
var collection1 = mysandwiches("ham", "cheese", "lecruce"); // can aadd as many you wish
var collection2 = mysandwiches("turkey", "swiss");
var collection3 = mysandwiches(); // without arrgument
console.log(collection1);
console.log(collection2);
console.log(collection3);
