const { assert } = require('chai');
const { it } = require('mocha');
const multiply = require('../multiply');

// eslint-disable-next-line no-undef
describe('multiply test', () => {
  it('Multiply 1 by 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
  it('Multiply 2 by 2', () => {
    assert.equal(multiply(2, 2), 4);
  });
  it('Multiply 3 by 3', () => {
    assert.equal(multiply(3, 3), 9);
  });
  it('Multiply 4 by 4', () => {
    assert.equal(multiply(4, 4), 16);
  });
  it('Multiply 23 by 45', () => {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
