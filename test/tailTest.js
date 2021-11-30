const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(tail([1,2,3]).join(', '), '2, 3');