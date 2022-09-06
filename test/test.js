const { assert } = require('chai');
const { it } = require('mocha');
const multiply = require('../multiply');

describe('multiply test', () => {
  it('Multiply 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});
