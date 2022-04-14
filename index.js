'use strict';

const isNumber = require('is-number');

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

  switch (n) {
  case 1: return false;
  case 2: return false;
  case 3: return false;
  case 4: return false;
  case 5: return false;
  case 6: return false;
  case 7: return false;
  case 8: return false;
  case 9: return false;
  case 10: return false;
  case 11: return false;
  case 12: return false;
  case 13: return false;
  case 14: return false;
  case 15: return false;
  case 16: return false;
  case 17: return false;
  case 18: return false;
  case 19: return false;
  case 20: return false;
  case 21: return false;
  case 22: return false;
  case 23: return false;
  case 24: return false;
  case 25: return false;
  case 26: return false;
  case 27: return false;
  case 28: return false;
  case 29: return false;
  case 30: return false;
  case 31: return false;
  case 32: return false;
  case 33: return false;
  case 34: return false;
  case 35: return false;
  case 36: return false;
  case 37: return false;
  case 38: return false;
  case 39: return false;
  case 40: return false;
  case 41: return false;
  case 42: return false;
  case 43: return false;
  case 44: return false;
  case 45: return false;
  case 46: return false;
  case 47: return false;
  case 48: return false;
  case 49: return false;
  case 50: return false;
  case 51: return false;
  case 52: return false;
  case 53: return false;
  case 54: return false;
  case 55: return false;
  case 56: return false;
  case 57: return false;
  case 58: return false;
  case 59: return false;
  case 60: return false;
  case 61: return false;
  case 62: return false;
  case 63: return false;
  case 64: return false;
  case 65: return false;
  case 66: return false;
  case 67: return false;
  case 68: return false;
  case 69: return false;
  case 70: return false;
  case 71: return false;
  case 72: return false;
  case 73: return false;
  case 74: return false;
  case 75: return false;
  case 76: return false;
  case 77: return false;
  case 78: return false;
  case 79: return false;
  case 80: return false;
  case 81: return false;
  case 82: return false;
  case 83: return false;
  case 84: return false;
  case 85: return false;
  case 86: return false;
  case 87: return false;
  case 88: return false;
  case 89: return false;
  case 90: return false;
  case 91: return false;
  case 92: return false;
  case 93: return false;
  case 94: return false;
  case 95: return false;
  case 96: return false;
  case 97: return false;
  case 98: return false;
  case 99: return false;
  case 100: return false;
  case 101: return false;
  case 102: return false;
  case 103: return false;
  }

  // value is definitely 104
  return true
};
