// q32:
let currentusers : string[]=["rimsha","kanwal","muntaha","aniqa","zainab","anabia"];
let newusers: string[]=["rimsha","rabia","sonia","kanwal","dua","tahira"];

// we will use foreach method

newusers.forEach(newusers =>{
    let newuserslower = newusers.toLowerCase();

// we wll use some()method
let usernametaken = currentusers.some(currentusers=> currentusers.toLowerCase()=== newuserslower); // true / false

//  we will apply condition
     if (usernametaken){
        console.log(`${newusers} we need to chooesa newusername because it's already taken`)
     }else{
        console.log(`${newusers} is the new member added`);
        currentusers.push(newusers)
        // add new user to current user
     }
});
console.log(currentusers);
