// q35:
var animalName = ["cow", "camel", "sheep", "goat"];
//print only name
for (var _i = 0, animalName_1 = animalName; _i < animalName_1.length; _i++) {
    var i = animalName_1[_i];
    console.log(i);
}
for (var _a = 0, animalName_2 = animalName; _a < animalName_2.length; _a++) {
    var j = animalName_2[_a];
    console.log("".concat(j, " is a domestic animal"));
}
console.log("All these animals ".concat(animalName[0], ", ").concat(animalName[1], ",").concat(animalName[2], " and ").concat(animalName[3], " meat is halal in islam"));
