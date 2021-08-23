const tail = require('../tail');  
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns '3' for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), '3');
  });

  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Labs');
  });

});

