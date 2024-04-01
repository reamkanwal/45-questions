"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// q16: 
// name array
let guestArray = ["Rimsha", "Kanwal", "Aniqa", "Muntaha"];
// cannot make for dinner
let cannotAttend = "Kanwal";
// invite new guest
let newGuest = "Komal";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log("welcome all we found a bigger dinner table");
// add new in start
guestArray.unshift("abdullah");
// add in middle
let middleguest = "Tahira";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleguest);
// add in end
guestArray.push("neha");
guestArray.map((item) => console.log(`\ndear ${item} you are invited to dinner`));
