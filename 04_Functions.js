function display(x) {
    console.log(x);
}

function userDetails(userName, userAge) {
    console.log("User Name : " + userName);
    console.log("User Age : " + userAge);
}

function sumTotal(x, y) {
    return(x + y);
}

var getEval = function(x, y) {
    return(x * y);
}

var displayRes = (x, y) => {
    return(x / y);
}

/* function calls */
display(12);

userDetails("jay", 23);

var sum = sumTotal(2, 8);
console.log("sum : " + sum);

var a = 6;
var b = 9;

var res = getEval(a, b);
console.log("res - getEval : " + res);

var res = displayRes(a, b);
console.log("res - displayRes : " + res);