// q43
var magicianNames2 = ["rimsha", "kanwal", "aniqa", "komal"];
//  making a copy of an arry
var magicianNamecopy = [magicianNames2];
function show_magician(greet) {
    var withgreetings = "";
    for (var _i = 0, magicianNames2_1 = magicianNames2; _i < magicianNames2_1.length; _i++) {
        var item = magicianNames2_1[_i];
        withgreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withgreetings;
}
var mygreetings = show_magician("hello");
var makeArray = mygreetings.split("\n");
console.log(makeArray);
// orignal array
console.log(magicianNames2);
