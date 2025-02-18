const removeFromArray = function(array, ...arrayItems) {

return array.filter((item) => !arrayItems.includes(item))

};

// Do not edit below this line
module.exports = removeFromArray;
