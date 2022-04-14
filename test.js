'use strict';

require('mocha');
const assert = require('assert');
const is104 = require('./');

describe('is104', function() {
  it('should return true if the number is 104:', function() {
    assert(!is104(0));
    assert(!is104(1));
    assert(!is104(42));
    assert(!is104(1000));
    assert(!is104(-18));
    assert(!is104(1.0e2));
    assert(!is104(9007199254740991));

    assert(is104(1.04e2));
    assert(is104(104));
  });

  it('should work with strings:', function() {
    assert(!is104('0'));
    assert(!is104('1'));
    assert(!is104('42'));
    assert(!is104('1000'));
    assert(!is104('-18'));
    assert(!is104('1.0e2'));
    assert(!is104('9007199254740991'));

    assert(is104('1.04e2'));
    assert(is104('104'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => is104('foo'), /expected a number/);
    assert.throws(() => is104(1936.27), /expected an integer/);
    assert.throws(() => is104('1.1e0'), /expected an integer/);
    assert.throws(() => is104('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => is104(9007199254740992), /value exceeds maximum safe integer/);
  });
});
