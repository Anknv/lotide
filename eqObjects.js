const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const result = eqObjects(ab, ba);
const result1 = eqObjects(ab, abc);

// TEST CODE
assertEqual(result, true);
assertEqual(result1, false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result2 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const result3 = eqObjects(cd, cd2); // => false

assertEqual(result2, true);
assertEqual(result3, false);