const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([0,13,7]), 0);
assertEqual(head(["One", "Two", "Three"]), "One");
assertEqual(head([]), undefined);
assertEqual(head([13]), 13);