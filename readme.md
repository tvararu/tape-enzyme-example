A very minimal testing setup using [tape](https://github.com/substack/tape) and [enzyme](https://github.com/airbnb/enzyme) to test a React component. Inspired by [Eric Elliot's article](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4).

Some of the things that this setup gets right:

- ES6 and JSX everywhere courtesy of `babel-node` with presets.
- No `describe`, `it`, and other linter-perturbing global variables.
- No `look.at.my.natural.language.assertions` DSL.

Some of the things I haven't looked into doing yet:

- Watching multiple files for changes and only running the correct test file.
- Resolving paths automatically, so you can do `components/Foo` rather than `./components/Foo`.

# Installation

```node
npm i
npm test
```

# License

WTFPL/Public Domain.
