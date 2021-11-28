const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  if  (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    const keysInObj = Object.keys(object1);
    for (let key of keysInObj) {
      const value = object1[key];
      const value2 = object2[key];
      if (Array.isArray(value)) {
        //comparing array values
        if (!eqArrays(value, value2)) {
          return false;
        }
      } else {
        //comparing primitive values
        if (value !== value2) {
          return false;
        }
      }
    }
    return true;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
