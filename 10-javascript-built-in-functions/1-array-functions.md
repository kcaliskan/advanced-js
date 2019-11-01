# JavaScript Array Functions

## Map vs ForEach

Let’s first take a look at the definitions on MDN:

- `forEach()` executes a provided function once for each array element.

- `map()` creates a new array with the results of calling a provided function on every element in the calling array.

The `forEach()` method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array. This means `forEach` is best used for situations where you don’t need a new, modified array in return. For example, if you wanted to alert out the contents of an array:

Meanwhile, the `map()` method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new Array of the same size.

## map()

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

As you can see, we have five different types of objects:

- An array
- The elements contained within this array
- A function
- The results returned by this function
- A new array

Looking at it this way, we can start to see what’s going on. map is a function that:

- Takes an array and a function
- Applies the function to every element in the array
- Keeps track of the results of each successive function call
- Returns a new array containing these results

In the physical world, a `map` is a way of projecting a surface (terrain) onto another (paper). Similarly, the `map` function “projects” the original array into the new one.

```javascript
myArray = [1, 2, 3, 4];

let newArrayWithMap = myArray.map(function(element) {
  return element + 1;
});

console.log(newArrayWithMap); // [2,3,4,5]
```

## filter()

## reduce()

## sort()

# Sources

- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
- [is it possible to change values of the array when doing foreach in javascript?](https://stackoverflow.com/a/31298343)
- [Understanding JavaScript's map()](http://www.discovermeteor.com/blog/understanding-javascript-map/)
