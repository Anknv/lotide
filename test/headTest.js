// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 0 for [0, 13, 7]", () => {
    assert.strictEqual(head([0, 13, 7]), 0); 
  });

  it('returns "One" for ["One", "Two", "Three"]', () => {
    assert.strictEqual(head(["One", "Two", "Three"]), 'One'); 
  });
});