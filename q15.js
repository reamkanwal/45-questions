"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q15: 
// name array
let guestArray = ["Rimsha", "Kanwal", "Aniqa", "Muntaha"];
// cannot make for dinner
let cannotAttend = "Kanwal";
console.log(`${cannotAttend} can not make it for dinner`);
// invite new guest
let newGuest = "Komal";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
// send message
guestArray.map((item) => console.log(`Hello, ${item} your invited to dinner`));
