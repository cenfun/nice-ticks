# nice-ticks
Nice Ticks is JavaScript Version "Nice Numbers for Graph Labels"

## Install
```sh
npm install nice-ticks
```

## Usage
```js
const niceTicks = require("nice-ticks");

const minValue = 0.81;
const maxValue = 12.3
const numTicks = 4; //default

const ticks = niceTicks(minValue, maxValue, numTicks);

console.log(ticks);
//[0, 5, 10, 15]

```

[more test cases](test/test.js)

## Browser
```html
<script src="https://cdn.jsdelivr.net/npm/nice-ticks@latest/dist/nice-ticks.js"></script>
<script>
const niceTicks = window["nice-ticks"];
</script>
```

## Reference
"Nice Numbers for Graph Labels", Graphics Gems, pp 61-63  
[Nice-Numbers-for-Graph-Labels.pdf](docs/Nice-Numbers-for-Graph-Labels.pdf)

When creating a graph by computer, it is desirable to label the x and y axes with nice numbers: simple decimal numbers.  
For example, if the data range is 105 to 543, we'd probably want to plot the range from 100 to 600 and put tick marks every 100 units.  
Or if the data range is 2.03 to 2.17, we'd probably plot a range from 2.00 to 2.20 with a tick spacing of .05.  
Humans are good at choosing such nice numbers, but simplistic algorithms are not.  
The naive label-selection algorithm takes the data range and divides it into n equal intervals, but this usually results in ugly tick labels. 
We here describe a simple method for generating nice graph labels. 

## CHANGELOG

* v1.0.1
    * Support importing ESM from webpack
