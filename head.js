const head = function(myArray) {
  return myArray[0];
}
console.log(head([]));

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual(head([0,13,7]), 0);
assertEqual(head(["One", "Two", "Three"]), "One");
assertEqual(head([]), undefined);
assertEqual(head([13]), 13);