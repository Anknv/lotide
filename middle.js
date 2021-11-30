const middle = function(array) {
  const newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    const middleIndex = Math.floor(array.length / 2)
    newArray.push(array[middleIndex]);
    return newArray;
  } else {
    const firstIndex = array.length / 2 - 1;
    const secondIndex = firstIndex + 1;
    newArray.push(array[firstIndex], array[secondIndex]);
    return newArray;
  }
};

module.exports = middle;