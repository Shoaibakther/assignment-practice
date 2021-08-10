const products = [
    { name: "laptop", price: 4300, quantity: 1 },
    { name: "shirt", price: 300, quantity: 4 },
    { name: "watch", price: 430, quantity: 2 },
    { name: "phone", price: 43000, quantity: 5 },
];
let cartTotal = 0;
for ( const product of products) {
    console.log(product);
    const productTotal = products.price * products.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);