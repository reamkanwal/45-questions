var username = ["rimsha", "kanwal", "aniqa", "admin", "komal"];
for (var i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log("\n hello ".concat(username[i], " would you like to see a status report?\n"));
    }
    else {
        console.log("hello ".concat(username[i], " thank you for loging again "));
    }
}
