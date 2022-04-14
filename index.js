'use strict';

const isNumber = require('is-number');
const isOdd = require('is-odd');

module.exports = function is104(value) {
  const n = +value;
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('value exceeds maximum safe integer');
  }

  // Take care of all corner cases
  if (n == 0) {
    return false;
  }
  if (n < 0) {
    return false;
  }
  if (n > 104) {
    return false;
  }

  // Return early if number is odd, as 104 is even, runs ~50% faster for small numbers
  if (isOdd(n)) {
    return false;
  }

  switch (n) {
  case 2: return false;
  case 4: return false;
  case 6: return false;
  case 8: return false;
  case 10: return false;
  case 12: return false;
  case 14: return false;
  case 16: return false;
  case 18: return false;
  case 20: return false;
  case 22: return false;
  case 24: return false;
  case 26: return false;
  case 28: return false;
  case 30: return false;
  case 32: return false;
  case 34: return false;
  case 36: return false;
  case 38: return false;
  case 40: return false;
  case 42: return false;
  case 44: return false;
  case 46: return false;
  case 48: return false;
  case 50: return false;
  case 52: return false;
  case 54: return false;
  case 56: return false;
  case 58: return false;
  case 60: return false;
  case 62: return false;
  case 64: return false;
  case 66: return false;
  case 68: return false;
  case 70: return false;
  case 72: return false;
  case 74: return false;
  case 76: return false;
  case 78: return false;
  case 80: return false;
  case 82: return false;
  case 84: return false;
  case 86: return false;
  case 88: return false;
  case 90: return false;
  case 92: return false;
  case 94: return false;
  case 96: return false;
  case 98: return false;
  case 100: return false;
  case 102: return false;
  }

  // value is definitely 104
  return true
};
