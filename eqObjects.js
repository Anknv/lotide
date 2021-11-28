const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if  (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    const keysInObj = Object.keys(object1);
    for (let key of keysInObj) {
      const value = object1[key];
      if (value !== object2[key]) {
        return false;
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

