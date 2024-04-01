// q31:
var username = ["rimsha", "kanwal", "aniqa", "admin", "komal"];
//  to remove empty araay
username = [];
console.log(username);
if (username.length > 0) {
    for (var i = 0; i < username.length; i++) {
        if (username[i] == "admin") {
            console.log("\n hello ".concat(username[i], " would you like to see a status report?\n"));
        }
        else {
            console.log("hello ".concat(username[i], " thank you for loging again "));
        }
    }
}
else {
    console.log("we need to find some user");
}
