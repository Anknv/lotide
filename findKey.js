const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  const keysInObj = Object.keys(obj);
  for (let key of keysInObj) {
    const value = obj[key];
    const result = callback(value);
    if (result) {
      return key;
    }
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const callback = x => x.stars === 2;
const foundKey = findKey(obj, callback);

const newCallback = x => x.stars === 1;
const foundKey1 = findKey(obj, newCallback);


// TEST CODE
assertEqual(foundKey, "noma");
assertEqual(foundKey1, "Blue Hill");
