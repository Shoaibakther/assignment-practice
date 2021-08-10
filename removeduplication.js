const name = ['abul', 'shoaib', 'shoaib akter', 'sp', 'abul', 'shoaib', 'shoaib akter', 'sp'];
function revomeduplicaton(name) {
    let uniqueName = [];
    for ( const element of name) {
        // console.log(element);
        if (uniqueName.indexOf(element) == -1) {
            uniqueName.push(element);
        }
    }
    return uniqueName;
}
var result = revomeduplicaton(name);
console.log(result);