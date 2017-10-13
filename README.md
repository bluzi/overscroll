# Overscroll JS

**What it does**: Overscroll detects when a user using Apple's touchpad feature (Macbook Touchpad or Magic Touchpad) scrolls outside the bounds of the webpage, firing a callback in your application.
It's extremely lightweight, has no dependencies, and is less than 400 bytes when minified.

### Example:
```javascript
overscroll(() => 
	console.log('Overscroll Detected')
);
```


## Installation

### Via jsDeliver (Recommended)


Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/overscrolljs@latest/overscroll.min.js"></script>
```

### Via NPM

Navigate to your project's directory, and execute the following command:

	$ npm i -S overscrolljs

Then, embed the script in your HTML using a script tag:
```html
<script src="node_modules/overscrolljs/overscroll.min.js"></script>
```
___

### Contributing

[Check for open issues](https://github.com/bluzi/overscroll/issues) or add your own features by starting a pull request.
