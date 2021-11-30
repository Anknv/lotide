const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrOne, arrTwo) {
  console.log(eqArrays(arrOne, arrTwo) ? `✅✅✅ Assertion Passed: ${arrOne.join()} === ${arrTwo.join()}` : `❌❌❌ Assertion Failed: ${arrOne.join()} === ${arrTwo.join()}`);
};

module.exports = assertArraysEqual;
