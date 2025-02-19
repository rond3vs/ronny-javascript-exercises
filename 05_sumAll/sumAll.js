const sumAll = function(x, y) {
    // if (typeof x !== 'number' ||
    //     typeof y !== 'number' ||
    //     x < 0 || 
    //     y < 0 || 
    //     !Number.isInteger(x) || 
    //     !Number.isInteger(y)
    // ){
    //     return 'ERROR'
    // }

    // const min = Math.min(x,y);
    // const max = Math.max(x,y);

    // const sum = ((min+max)*((max-min+1))/2);

    // return sum;

    if (typeof x !== 'number' || typeof y !== 'number' || x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';

    const min = Math.min(x,y);
    const max = Math.max(x,y);
    let sum = 0
    
    for (let i = min; i <= max; i++){
        sum += i
        
    }
    return sum

}

    

// Do not edit below this line
module.exports = sumAll;
