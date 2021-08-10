function maximunNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element =numbers[i];
        if (element > max) {
            max = element;
            
        }
      
    }
    return max;
    
}
var total = maximunNumber([34, 35, 55]);
console.log(total);