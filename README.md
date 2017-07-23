# Required parameters

Throws an error when a given parameter is not provided to a function.

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/is-required.svg
[npm-url]: https://www.npmjs.com/package/is-required
[downloads-image]: https://img.shields.io/npm/dw/is-required.svg
[deps-image]: https://david-dm.org/doasync/is-required.svg
[issues-image]: https://img.shields.io/github/issues/doasync/is-required.svg
[issues-url]: https://github.com/doasync/is-required/issues
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/doasync/is-required/master/LICENSE
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

In ECMAScript 6, the default argument expression gets evaluated at call time
when a parameter is missing or undefined. You can use `required()` as a default value
to make that parameter to be provided forcibly.

## Installation

```bash
npm i --save is-required
```

## Usage examples

Parameter `val` is required:

```javascript
const isRequired = require('is-required');

function foo (val = isRequired('val')) {
  return val;
}

foo();
```

Throws Error:
```bash
Error: Missing required parameter "val" in function "foo"
```

You can omit the name:

```javascript
const required = require('is-required');

function bar (myParam = required()) {
  return myParam;
}

bar();
//Error: Missing required parameter in function "foo"

```
