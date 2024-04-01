// q32:
var currentusers = ["rimsha", "kanwal", "muntaha", "aniqa", "zainab", "anabia"];
var newusers = ["rimsha", "rabia", "sonia", "kanwal", "dua", "tahira"];
// we will use foreach method
newusers.forEach(function (newusers) {
    var newuserslower = newusers.toLowerCase();
    // we wll use some()method
    var usernametaken = currentusers.some(function (currentusers) { return currentusers.toLowerCase() === newuserslower; }); // true / false
    //  we will apply condition
    if (usernametaken) {
        console.log("".concat(newusers, " we need to chooesa newusername because it's already taken"));
    }
    else {
        console.log("".concat(newusers, " is the new member added"));
        currentusers.push(newusers);
        // add new user to current user
    }
});
console.log(currentusers);
