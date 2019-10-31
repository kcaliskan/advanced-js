# JavaScript Array Functions

## Map vs ForEach

Let’s first take a look at the definitions on MDN:

- `forEach()` executes a provided function once for each array element.

- `map()` creates a new array with the results of calling a provided function on every element in the calling array.

The `forEach()` method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

Meanwhile, the `map()` method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new Array of the same size.

# Sources

- [JavaScript — Map vs. ForEach
  ](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
