// q35:

let animalName : string[]=["cow","camel","sheep","goat"];
//print only name

for (let i of animalName){
    console.log(i);
}
for(let j of animalName){
    console.log(`${j} is a domestic animal`);
}

console.log(`All these animals ${animalName[0]}, ${animalName[1]},${animalName[2]} and ${animalName[3]} meat is halal in islam`);