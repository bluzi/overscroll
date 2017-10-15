# Overscroll JS

**What it does**: Overscroll detects when a user, using Apple's touchpad feature (Macbook Touchpad or Magic Touchpad), scrolls outside the bounds of a webpage. When they do Overscroll can fire a callback function in your application.
It's extremely lightweight, has no dependencies, and is less than 550 bytes when minified and gzipped.

## Usage:

```javascript
overscroll(() => 
    console.log('Overscroll Detected')
);
```

## Installation

### Via jsDeliver

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/overscrolljs@latest/dist/overscroll.min.js"></script>
```

### Via NPM or [Yarn](https://yarnpkg.com)

Navigate to your project's directory, and execute the following command:

```sh
$ npm i -S overscrolljs
```

or

```sh
$ yarn add overscrolljs
```

Then import the file using a module loader like [Webpack](https://webpack.js.org/), [TypeScript](https://www.typescriptlang.org/), [Rollup](https://rollupjs.org/), and [Browserify](http://browserify.org/), or using [native ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```javascript
import overscroll from `overscrolljs`;
```

> **Note:** If you try to import the module using `requirejs` you will need to import it as
```javascript
var overscroll = require('overscroll.js').default;
```

Alternatively you can embed the script in your HTML using a script tag:
```html
<script src="node_modules/overscrolljs/dist/overscroll.min.js"></script>
```
___

## Contributing

[Check for open issues](https://github.com/bluzi/overscroll/issues) or add your own features by starting a pull request.

### Building the Project

An npm script compiles the typescript and generates a minified/uglified bundle.

```
$ npm run build
```
