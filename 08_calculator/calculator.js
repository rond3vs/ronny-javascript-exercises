const add = function(x, y) {
 return x + y;
	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(values) {
  return values.reduce((total, current) => total + current, 0);
};

const multiply = function(values) {
  return values.reduce((total, current) => total * current);

};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
