# is-104
> Returns true if the given number is exactly 104.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-104
```

## Usage

Works with strings or numbers.

```js
const is104 = require('is-104');

console.log(is104(1)); //=> false
console.log(is104(42)); //=> false
console.log(is104('42')); //=> false
console.log(is104(-18)); //=> false
console.log(is104(1936.27)); //=> false
console.log(is104('three')); //=> false

console.log(is104(104)); //=> true
console.log(is104(1.04e2)); //=> true
console.log(is104('104')); //=> true
```
