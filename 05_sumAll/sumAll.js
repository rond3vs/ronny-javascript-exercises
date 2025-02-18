const sumAll = function(x, y) {
    if (typeof x !== 'number' ||
        typeof y !== 'number' ||
        x < 0 || 
        y < 0 || 
        !Number.isInteger(x) || 
        !Number.isInteger(y)
    ){
        return 'ERROR'
    }

    const min = Math.min(x,y);
    const max = Math.max(x,y);

    const sum = ((min+max)*((max-min+1))/2);

    return sum;
}

console.log(sumAll(6,10))
    

// Do not edit below this line
module.exports = sumAll;
