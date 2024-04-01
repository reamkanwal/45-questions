// q42:
let magicianNames : string[]= ["rimsha", "kanwal", "aniqa", "komal"]

function show_magician(greet : string){
    for(let item of magicianNames){
      console.log(greet,item)
    }
}


show_magician("hello, how are you miss");
show_magician("hello");