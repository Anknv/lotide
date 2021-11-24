const assertArraysEqual = function(arrOne, arrTwo) {
  console.log(eqArrays(arrOne, arrTwo) ? '✅✅✅' : '❌❌❌');
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

const without = function (source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    let canAdd = true
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        canAdd = false;
      }
    }
    if (canAdd) {
      newArray.push(source[i])
    }
  } 
  return newArray
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);