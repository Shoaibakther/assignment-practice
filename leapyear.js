function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
var result = leapYear(1920);
console.log(result);