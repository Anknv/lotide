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

const assertArraysEqual = function(arrOne, arrTwo) {
  console.log(eqArrays(arrOne, arrTwo) ? '✅✅✅' : '❌❌❌');
};

const middle = function(array) {
  const newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    newArray.push(Math.floor(array.length / 2));
    return newArray;
  } else {
    const firstIndex = array.length / 2 - 1;
    const secondIndex = firstIndex + 1;
    newArray.push(array[firstIndex], array[secondIndex]);
    return newArray;
  }
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

