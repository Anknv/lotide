const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    const result = callback(obj[key]);
    if (result) {
      return key;
    }
  } ;
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
console.log(foundKey);
