let greeting = 'hello how are you';
function reverseFunction(text) {
    let reverse = [];
    for ( const element of text) {
        // console.log(element);
        reverse = element + reverse;
    }
    return reverse;
}
var result = reverseFunction(greeting);
console.log(result);