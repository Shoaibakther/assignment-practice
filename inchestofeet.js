function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}
var myinches = 120;
var feet = inchTofeet(myinches);
console.log(feet);