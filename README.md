# nice-ticks
Nice Ticks is JavaScript implementation for "Nice Numbers for Graph Labels"  
For example, if the data range is 0.81 to 12.3, and we need 4 ticks (depends on your graph size) in axis.  
The native ticks should be following but probably not what we want:  
```js
[0.81, 6.555, 6.555, 12.3] ×
```
So nice-ticks will help generate "nice" ticks like:
```js
[0, 5, 10, 15] √
```

## Install
```sh
npm install nice-ticks
```

## Usage
```js
var niceTicks = require("nice-ticks");

var minValue = 0.81;
var maxValue = 12.3
// Results may not match exactly but close, default is 4
var numTicks = 4;

var ticks = niceTicks(minValue, maxValue, numTicks);

console.log(ticks);
//[0, 5, 10, 15]

```

[more test cases](test/test.js)

## Browser
```html
<script src="https://cdn.jsdelivr.net/npm/nice-ticks@latest/dist/nice-ticks.js"></script>
<script>
var niceTicks = window["nice-ticks"];
</script>
```

## Test Online
[https://cenfun.github.io/nice-ticks/](https://cenfun.github.io/nice-ticks/)

## Reference
When creating a graph by computer, it is desirable to label the x and y axes with nice numbers: simple decimal numbers.  
For example, if the data range is 105 to 543, we'd probably want to plot the range from 100 to 600 and put tick marks every 100 units.  
Or if the data range is 2.03 to 2.17, we'd probably plot a range from 2.00 to 2.20 with a tick spacing of .05.  
Humans are good at choosing such nice numbers, but simplistic algorithms are not.  
The naive label-selection algorithm takes the data range and divides it into n equal intervals, but this usually results in ugly tick labels. 
We here describe a simple method for generating nice graph labels.  
...
"Nice Numbers for Graph Labels", Graphics Gems, pp 61-63  
[Nice-Numbers-for-Graph-Labels.pdf](docs/Nice-Numbers-for-Graph-Labels.pdf)
## CHANGELOG

* v1.0.2
    * Support IE (ES5)

* v1.0.1
    * Support importing ESM from webpack
