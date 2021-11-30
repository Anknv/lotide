const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  console.log(eqArrays(arrOne, arrTwo) ? '✅✅✅' : '❌❌❌');
};

module.exports = assertArraysEqual;
