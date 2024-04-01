"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Q17: name array
let guestArray = ["Rimsha", "Kanwal", "Aniqa", "Muntaha"];
// cannot make for dinner
let cannotAttend = "Kanwal";
// invite new guest
let newGuest = "Komal";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
guestArray.unshift("abdullah");
let middleguest = "Tahira";
let middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleguest);
guestArray.push("neha");
console.log(guestArray);
console.log("we can invite only two people for dinner");
while (guestArray.length > 2) {
    let removeguest = guestArray.pop();
    console.log(`\nsorry ${removeguest} we can not invite you to dinner`);
}
;
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner`));
