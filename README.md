# nice-ticks
Nice Ticks is JavaScript Version "Nice Numbers for Graph Labels"

## Why


## Install
```sh
npm install nice-ticks
```



## Usage
```js
const niceTicks = require("nice-ticks");

var minValue = 0.81;
var maxValue = 12.3
var numTicks = 4; //default

var ticks = niceTicks(minValue, maxValue, numTicks);

console.log(ticks);
//[0, 5, 10, 15]

```

[more test cases](./test/test.js)

## Browser
```html
<script src="https://cdn.jsdelivr.net/npm/nice-ticks@latest/dist/nice-ticks.js"></script>
<script>
var niceTicks = window["nice-ticks"];
</script>
```

## Reference
"Nice Numbers for Graph Labels", Graphics Gems, pp 61-63.  

## CHANGELOG

* v1.0.1
    * Support importing ESM from webpack
