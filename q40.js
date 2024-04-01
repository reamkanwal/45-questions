//  q40:
// function myAlbum(artistName: string , albumTitle : string){
//     return {artistName, albumTitle}
// }
// let album1 = myAlbum("rimsha", "rang -e- mohabbat");
// let album2 = myAlbum("ream", "roshan andhera");
// let album3 = myAlbum("kanwal", "siyah raat");
// console.log(album1);
// console.log(album2)
// console.log(album3);
// number of trackes
function myAlbum2(artistName, albumTitle, numberoftracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberoftracks: numberoftracks };
}
var album1 = myAlbum2("rimsha", "rang -e- mohabbat", 30);
var album2 = myAlbum2("ream", "roshan andhera", 55);
var album3 = myAlbum2("kanwal", "siyah raat");
console.log(album1);
console.log(album2);
console.log(album3);
