// q36
function makeshirt(size, label) {
    // return size + label
    return "My shirt size is ".concat(size, " and label is ").concat(label);
}
var myfunction1 = makeshirt(36, "The happy day");
// how to print 
console.log(myfunction1);
//  2nd method
var myfunction2 = function (size, label) {
    return size + label;
};
console.log(myfunction2(36, " the sunny day"));
