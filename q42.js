// q42:
var magicianNames = ["rimsha", "kanwal", "aniqa", "komal"];
function show_magician(greet) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(greet, item);
    }
}
show_magician("hello, how are you miss");
show_magician("hello");
