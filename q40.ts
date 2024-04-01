//  q40:
function myAlbum(artistName: string , albumTitle : string){
    return {artistName, albumTitle}
}

let album1 = myAlbum("rimsha", "rang -e- mohabbat");
let album2 = myAlbum("ream", "roshan andhera");
let album3 = myAlbum("kanwal", "siyah raat");

console.log(album1);
console.log(album2)
console.log(album3);



// number of trackes
function myAlbum2(artistName: string , albumTitle : string, numberoftracks? : number){
    return {artistName, albumTitle, numberoftracks}
}

let album4 = myAlbum2("rimsha", "rang -e- mohabbat",30);
let album5 = myAlbum2("ream", "roshan andhera", 55);
let album6 = myAlbum2("kanwal", "siyah raat",);

console.log(album4);
console.log(album5);
console.log(album6);
