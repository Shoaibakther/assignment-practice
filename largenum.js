function largestnumber(age) {
    let large = age[0];
    for ( let i = 0; i <age.length; i++) {
        const element = age[i];
        if (element > large) {
            large = element;
        }
    }
    return large;
}
var total = largestnumber([15, 45, 6, 35]);
console.log(total);