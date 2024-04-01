// q36

function makeshirt(size : number, label: string){
    // return size + label
    return `My shirt size is ${size} and label is ${label}`;
}


let myfunction1 = makeshirt(36 , "The happy day");

// how to print 
console.log(myfunction1)


//  2nd method
let myfunction2=( size : number, label: string) =>{
    return size + label
}
console.log(myfunction2(36 , " the sunny day"));