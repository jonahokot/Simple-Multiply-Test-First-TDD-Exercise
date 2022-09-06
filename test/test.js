const { assert } = require('chai');
const { it } = require('mocha');
const multiply = require('../multiply');

// eslint-disable-next-line no-undef
describe('multiply test', () => {
  it('Multiply 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
  it('Multiply 2', () => {
    assert.equal(multiply(2, 2), 4);
  });
});
