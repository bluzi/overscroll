# Overscroll JS
*Overscroll* detects when a user who uses one of Apple's Touchpads (MacBook's Touchpad or a Magic Touchpad) scrolls outside the bounds of a webpage, and fires a callback.

It is easy to set, has no dependencies and weights less than 400 bytes minified. 

## Usage
After installing *Overscroll*, test it using the following code:

```javascript
overscroll(() => console.log('Overscroll Detected'));
```

You can add as many listeners as you want simply by calling the overscroll function again.

## Installation
### Via jsDeliver (Recommended)
Add the following script tag to your HTML file:
```html
<script src="https://cdn.jsdelivr.net/npm/overscrolljs@1.0.1/overscroll.min.js"></script>
```

### Via NPM
Navigate to your project's directory, and execute the following command:

`$ npm i -S overscrolljs`

Then, embed the script in your HTML using a script tag: 

```html
    <scirpt src="node_modules/overscrolljs/overscroll.min.js"></script>
```

## Contribution
Feel free to create PRs, I will try to merge them ASAP.

