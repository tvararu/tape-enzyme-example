A very minimal testing setup using [tape](https://github.com/substack/tape) and [enzyme](https://github.com/airbnb/enzyme) to test a React component.

Some of the things that this setup gets right:

- ES6 and JSX everywhere courtesy of `babel-node` with presets.

Some of the things I haven't looked into doing yet:

- Watching multiple files for changes and only running the correct test file.
- Resolving paths automatically, so you can do `components/Foo` rather than `./components/Foo`.

# Installation

```node
npm i
npm test
```
