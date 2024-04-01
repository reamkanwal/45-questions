//Q15: 
// name array
let guestArray : string[]= ["Rimsha","Kanwal","Aniqa","Muntaha"];

// cannot make for dinner
let cannotAttend : string ="Kanwal";
console.log(`${cannotAttend} can not make it for dinner`);

// invite new guest
let newGuest: string= "Komal";
guestArray[guestArray.indexOf(cannotAttend)]=newGuest;

// send message
guestArray.map((item)=>console.log(`Hello, ${item} your invited to dinner`));