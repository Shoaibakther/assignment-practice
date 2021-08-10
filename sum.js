function arraytotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        sum = sum + element;

    }
    return sum;
}
var total = arraytotal([25, 45, 65]);
console.log(total);