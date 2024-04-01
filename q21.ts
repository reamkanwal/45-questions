// q21:
interface item {
    name : string
    price:number
}
 
// create object 
const book : item= {
    name:"ESSENTIAL TYPESCRIPT",
    price:450,
}

const fruit : item={
    name : "mango",
    price :200,
}

console.log(`Book name: ${book.name}, \n price, $${book.price}`);
console.log(`fruit name: ${fruit.name}, \n price, $${fruit.price}`);