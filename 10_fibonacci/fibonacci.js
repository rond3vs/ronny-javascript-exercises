const fibonacci = function(n) {
    n = Number(n);


    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, sum;

    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;

    }

    return b;
    



};

// Do not edit below this line
module.exports = fibonacci;
