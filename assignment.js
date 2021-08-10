// Task 01 seerTomon 


function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}
let totalSeer = 500;
let result = seerToMon(totalSeer);
console.log(result);



// Task 02 TotalSales 


 function totalSales(shirt, pant, shoes) {
    var shirtSell = shirt * 2;
    var pantSell = pant * 3;
    var shoesSell = shoes * 10;
    var total = shirtSell + pantSell + shoesSell;
    return total;
}
var shirtPrice = 100;
var pantPrice = 200;
var shoesPrice = 500;
var totalPrice = totalSales(shirtPrice, pantPrice, shoesPrice);
console.log(totalPrice);

 

// Task 03 delivaryCost 

function deliveryCost(delevary) {
    const firstDelevaryPrice = 100;
    const secondDelevaryPrice = 80;
    const thirdDelevaryPrice = 50;
    if (delevary <= 100) {
        const count = delevary * firstDelevaryPrice;
        return count;
    }
    else if (delevary < 200) {
        const fistdelevaryshirt = 100 * firstDelevaryPrice;
        const leftDelevary = delevary - 100;
        const secondDelevaryshirt = leftDelevary * secondDelevaryPrice;
        const totalDelevary = fistdelevaryshirt + secondDelevaryshirt;
        return totalDelevary;
    }
    else {
        const fistdelevaryshirt = 100 * firstDelevaryPrice;
        const secondDelevaryshirt = 100 * secondDelevaryPrice;
        const leftDelevary = delevary - 200;
        const restDensityShirt = leftDelevary * thirdDelevaryPrice;
        const totalDelevary = fistdelevaryshirt + secondDelevaryshirt + restDensityShirt;
        return totalDelevary;
    }
}
const tShirt = deliveryCost(250);
console.log(tShirt); 


// Task 04 perfectFriend 

var friends = ['Shoaib', 'Shakil', 'Sajol', 'Sakiib'];
function perfectFriend(friends) {
    for ( const friend of friends){
        if(friend.length == 5){
            return friend;
        }
    }
}
let friendName = perfectFriend(friends);
console.log(friendName);