// q16: 
// name array
let guestArray : string[]= ["Rimsha","Kanwal","Aniqa","Muntaha"];

// cannot make for dinner
let cannotAttend : string ="Kanwal";

// invite new guest
let newGuest: string= "Komal";
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;

console.log("welcome all we found a bigger dinner table");

// add new in start
guestArray.unshift("abdullah");

// add in middle
let middleguest : string = "Tahira"
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleguest);

// add in end
guestArray.push("neha");

guestArray.map((item)=>console.log(`\ndear ${item} you are invited to dinner`));