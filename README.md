[![npm version](https://img.shields.io/npm/v/playwright-assertions.svg)](https://www.npmjs.com/package/playwright-assertions)

# playwright-assertions

**Extend Playwright's testing power with custom, expressive matchers.**

Playwright's built-in `expect` API is great, but sometimes you need more specialized assertions for your tests. `playwright-assertions` lets you write clearer, more maintainable tests by using custom matchers for common testing needs—covering arrays, strings, URLs, dates, and much more, with ongoing growth from community contributions.

**Why use this?**
- Make your tests more readable and intention-revealing
- Reduce boilerplate and repetitive assertion logic
- Easily share custom matchers across projects and teams


## Installation

```bash
npm install playwright-assertions
```

> Note: You must have `@playwright/test` installed.

## Usage

Import and use the extended `expect` in your Playwright tests:

```ts
import { expect } from 'playwright-assertions';

// Example matcher:
expect([1, 2, 2, 3]).toHaveDuplications();
expect([1, 2, 3]).not.toHaveDuplications();
```


## Available Matchers

This library aims to provide a rich set of assertions for:
- Arrays
- Strings
- URLs
- Dates
- And many other common data types

See the documentation and matcher list for details as the library grows.


## Project Status & Roadmap

**This package is an ongoing effort and currently missing many common assertions.**
We are actively working to expand the matcher set, and contributions are highly encouraged!

If you have ideas for new matchers or improvements, please open an issue or submit a pull request.

## Contributing

We welcome contributions to add new matchers, improve documentation, or fix bugs.

1. Fork the repository
2. Create a new branch for your feature or fix
3. Write tests for your changes
4. Submit a pull request

Please follow the existing code style and add documentation for any new matchers.

## License

MIT
