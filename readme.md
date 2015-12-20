[![Build Status](https://travis-ci.org/tvararu/tape-enzyme-example.svg)](https://travis-ci.org/tvararu/tape-enzyme-example) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A very minimal testing setup using [tape](https://github.com/substack/tape) and [enzyme](https://github.com/airbnb/enzyme) to test a React component. Inspired by [Eric Elliot's article](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4).

Some of the things that this setup gets right:

- ES2015 and JSX everywhere courtesy of `babel-node` with presets.
- No `describe`, `it`, and other linter-perturbing global variables.
- No `look.at.my.natural.language.assertions` DSL.

Some of the things I haven't looked into doing yet:

- Watching multiple files for changes and only running the correct test file.
- Resolving paths automatically, so you can do `components/Foo` rather than `./components/Foo`.

# Installation

```bash
npm i
npm test
```

Example output:
```bash
npm test

> tapedd@1.0.0 test /Users/tvararu/github/tape-enzyme-example
> babel-node test.jsx | faucet

✓ <Foo /> adds two numbers
# tests 1
# pass  1
✓ ok
```

Tested on:

```bash
$ node -v
v5.3.0
$ npm -v
3.5.2
```

# License

WTFPL/Public Domain.
