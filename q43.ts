// q43

let magicianNames2 : string[]= ["rimsha", "kanwal", "aniqa", "komal"]


//  making a copy of an arry

let magicianNamecopy =[magicianNames2]
function show_magician(greet : string){
        let withgreetings = "";



    for(let item of magicianNames2){
     withgreetings += `${greet} ${item}\n`;
     
    }
    return withgreetings;
}

let mygreetings = show_magician("hello");
let makeArray = mygreetings.split("\n");
console.log(makeArray)

// orignal array
console.log(magicianNames2);