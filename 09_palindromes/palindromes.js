const palindromes = function(string) {
    if (typeof string != 'string') return 'ERROR';

    const newString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const backwardsNewString = newString.split('').reverse().join('');

    return newString === backwardsNewString;
};

// Do not edit below this line
module.exports = palindromes;
