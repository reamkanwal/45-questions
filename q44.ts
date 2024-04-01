//  q44:

//  array as a parameter
function mysandwiches(...items: string[]){
    return ` i want sandwich of ${items}`;
}

let collection1 = mysandwiches("ham","cheese","lecruce");   // can aadd as many you wish

let collection2 = mysandwiches("turkey", "swiss");
let collection3 = mysandwiches(); // without arrgument

console.log(collection1);
console.log(collection2);
console.log(collection3);
