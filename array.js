/* const people = ["shoaib", "Akther", "Shakil", "Sajol", "Soyel", "shoaib", "Akther", "Shakil", "Soyel", "shoaib", "Akther", "Shakil","Sajol", "Soyel",
];
function removeDuplicate(people) {
    const uniqueName = [];
    for ( const element of people) {
        if (uniqueName.indexOf(element) == -1) {
            uniqueName.push(element);
        }
 
    }
    return uniqueName;
}
const unique = removeDuplicate(people);
console.log(unique); */


/* const greeting = "Hello how are you";
function reversestring(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    console.log(reverse);
}
const reversed = reversestring(greeting);
console.log(reversed); */

/* 
for ( let i=1; i<=50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FOObar");
    }
    else if ( i % 5 == 0) {
        console.log("Foo");
    }
    else if ( i % 3 == 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
} */


/* const phones = [
    { name: "samsung", price: 45000, camera: 10, storage: 43},
    { name: "Nokia", price: 4000, camera: 10, storage: 43},
    { name: "Xiaomi", price: 4500, camera: 10, storage: 43},
    { name: "HTc", price: 5000, camera: 10, storage: 43},
    { name: "Oppo", price: 450, camera: 10, storage: 43},
    { name: "Realme", price: 400, camera: 10, storage: 43},
];
let chepest = phones[0];
for ( const phone of phones) {
    if (phone.price < chepest.price) {
        chepest = phone;
    }
}
console.log(chepest);


 */
/* const products = [
    {name: "laptop", price: 4300, quantity: 1},
    {name: "shirt", price: 300, quantity: 4},
    {name: "watch", price: 430, quantity: 2},
    {name: "phone", price: 43000, quantity: 5},
];
let totalPrice = 0;
for ( const product of products) {
    // console.log(product);
   const producttotalPrice = product.price * product.quantity;
   totalPrice = totalPrice + producttotalPrice;

}
console.log(totalPrice); */
