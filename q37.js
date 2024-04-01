// q37;
// function makeshirt(size : string, label:string){
//     return size + label
// }
// let myfun = makeshirt("large" , "I love typescript");
// console.log(myfun);
// making large by default
// function makeshirt(label:string ,size : string= "large"){
//     return size + label
// }
// let myfun = makeshirt("I love typescript");
// console.log(myfun);
// making shirt any size 
function makeshirt(label, size) {
    return size + label;
}
var myfun = makeshirt("any size", "I love typescript");
console.log(myfun);
