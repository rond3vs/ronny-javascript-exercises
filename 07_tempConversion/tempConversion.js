// (0°C × 9/5) + 32 = 32°F - to F
// (32°F − 32) × 5/9 = 0°C - to C


const convertToCelsius = function(temp) {
  if (typeof temp !== 'number') return 'Error: Input must be a number';
  let celsiusTemp = (temp - 32) * (5 / 9);
  return Number(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== 'number') return 'Error: Input must be a number';
  let freedomUnits = (temp * (9 / 5)) + 32;
  return Number(freedomUnits.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
