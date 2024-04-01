//  q33:

let mynumber = [1,2,3,4,5,6,7,8,9];
// for loop
for (let i = 0; i < mynumber.length;  i++ ){
    // now we use condition

    if(mynumber[i] == 1){
        console.log(`${mynumber[i]}st`);

    }else if (mynumber[i] == 2){
        console.log(`${mynumber[i]}nd`);

    }else if (mynumber[i] == 3){
        console.log(`${mynumber[i]}rd`);

    }else if(mynumber[1]>=4 || mynumber[i]<=9){
        console.log(`${mynumber[i]}th`);
    }
}

