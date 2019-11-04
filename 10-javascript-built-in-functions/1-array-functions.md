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

Here’s what the syntax looks like:

```javascript
let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});
```

- `newArr` — the new array that is returned
- `oldArr` — the array to run the map function on
- `val` — the current value being processed
- `index` — the current index of the value being processed
- `arr` — the original array

Example 1:

```javascript
myArray = [1, 2, 3, 4];

let newArrayWithMap = myArray.map(function(element) {
  return element + 1;
});

console.log(newArrayWithMap); // [2,3,4,5]
```

Example 2:

```javascript
let arr = [1, 2, 3, 4];

let newArr = arr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

//Result
newArr = [
  { value: 1, index: 0 },
  { value: 2, index: 1 },
  { value: 3, index: 2 },
  { value: 4, index: 3 }
];
```

Example 3:

```javascript
let arr = [1, 2, 3, 4];

let newArr = arr.map((v, i, a) => {
  return v % 2 === 0 ? v * 2 : v;
});

// newArr = [1,4,3,8];
```

## filter()

The `filter()` method returns a new array created from all elements that pass a certain test preformed on an original array.

Here’s what the syntax looks like:

```javascript
let newArr = oldArr.filter(callback);
```

- `newArr` — the new array that is returned
- `oldArr` — the array to run the filter function on
- `callback` — the function used to test each element of the oldArr.
  Returning `true` keeps the element, returning false to not keep it.

Our `callback` function can take three arguments:

- `element` — the current element of the array
- `index` — the current index of the value being processed
- `arr` — the original array

Example 1:

```javascript
let arr = [1, 2, 3, 4, 5, 6];

let even = arr.filter(val => {
  return val % 2 === 0;
});
// even = [2,4,6]
```

Example 2:

```javascript
let data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

let cities = data.filter(val => {
  return val.population > 500000000;
});

// cities = [{country: "China", population: 1409517397},
{country: "India", population: 1339180127}]
```

## reduce()

The `reduce()` method is used to apply a function to each element in the array to reduce the array to a single value.

Here’s what the syntax looks like:

```javascript
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);
```

- `result` — the single value that is returned.
- `arr` — the array to run the reduce function on.
- `callback` — the function to execute on each element in the array.
- `initValue` — an optionally supplied initial value. If this value is not supplied, the `0th` element is used as the initial value.

Our callback function can take four arguments:

- `accumulator` — the accumulator accumulates all of the callbacks returned values.
- `val` — the current value being processed
- `index` — the current index of the value being processed
- `arr` — the original array

**Note:**
Example 1: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or `initialValue`, if supplied.

```javascript
let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, val) => {
  return acc + val;
});

// sum = 10
```

Example 2:

```javascript
let data = [
  {
    country: "China",
    pop: 1409517397
  },
  {
    country: "India",
    pop: 1339180127
  },
  {
    country: "USA",
    pop: 324459463
  },
  {
    country: "Indonesia",
    pop: 263991379
  }
];
```

Sum up the population of every country except China?

```javascript
let sum = data.reduce((acc, val) => {
  return val.country == "China" ? acc : acc + val.pop;
}, 0);
```

## sort()

By default, the JavaScript `Array.sort` function converts each element in the array to be sorted, into a string, and compares them in `Unicode code point` order.

It’s also worth noting that unlike many other JavaScript array functions, `Array.sort` actually changes, or mutates the array it sorts.

Using `Array.sort` alone would not be very useful for sorting an array of objects. Thankfully, the function takes an optional `compareFunction` parameter, which causes the array elements to be sorted according to the return value of the compare function.

**Using Compare Functions to Sort**

Let’s say that `a` and `b` are the two elements being compared by the compare function. If the return value of the compare function is:

- less than 0 — `a` comes before `b`
- greater than 0  — `b` comes before `a`
- equal to 0  — `a` and `b` are left unchanged with respect to each other

```javascript
const bands = [
  { genre: 'Rap', band: 'Migos', albums: 2},
  { genre: 'Pop', band: 'Coldplay', albums: 4},
  { genre: 'Rock', band: 'Breaking Benjamins', albums: 1}
];

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const genreA = a.genre.toUpperCase();
  const genreB = b.genre.toUpperCase();

  let comparison = 0;
  if (genreA &gt; genreB) {
    comparison = 1;
  } else if (genreA &lt; genreB) {
    comparison = -1;
  }
  return comparison;
}

bands.sort(compare);

/* returns [
{ genre: 'Pop', band: 'Coldplay', albums: 4 },
{ genre: 'Rap', band: 'Migos', albums: 2 },
{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
] */
```

**Creating a Dynamic Sorting Function**

Let’s finish up by making this more dynamic. Let’s create a sorting function, which you can use to sort an array of objects, whose values are either strings or numbers. This function has two parameters — the key we want to sort by and the order of the results (i.e. ascending or descending).

```javascript
const bands = [
  { genre: 'Rap', band: 'Migos', albums: 2},
  { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13},
  { genre: 'Rock', band: 'Breaking Benjamins', albums: 1}
];

// function for dynamic sorting
function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA &gt; varB) {
      comparison = 1;
    } else if (varA &lt; varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}
```

And this is how you’d use it:

```javascript
// array is sorted by band, in ascending order by default
bands.sort(compareValues("band"));

// array is sorted by band in descending order
bands.sort(compareValues("band", "desc"));

// array is sorted by albums in ascending order
bands.sort(compareValues("albums"));
```

**String.prototype.localeCompare()**

In our example above, we want to be able to sort an array of objects, whose values are either strings or numbers. If, however, you know that you will only be dealing with objects whose values are strings, you can tidy up the code a little using JavaScript’s `localeCompare` method.

This method returns a number indicating whether a string comes before, after, or is the same as a given string in the sort order. It enables a case-insensitive sort of an array:

```javascript
["motorhead", "Motorhead", "Mötorhead"].sort();
// ["Motorhead", "Mötorhead", "motorhead"]

["motorhead", "Motorhead", "Mötorhead"].sort((a, b) =&gt; a.localeCompare(b));
//  ["motorhead", "Motorhead", "Mötorhead"]
```

In terms of our `compareValues` function, that means we could write:

```javascript
function compareValues(key, order = "asc") {
  return function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    let comparison = a[key].localeCompare(b[key]);

    return order == "desc" ? comparison * -1 : comparison;
  };
}
```

## `concat()`

The `concat()` method is used to join two or more arrays.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

**Syntax**
array1.concat(array2, array3, ..., arrayX)

Example 1

```javascript
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);

// children["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"]
```

# Sources

- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)
- [is it possible to change values of the array when doing foreach in javascript?](https://stackoverflow.com/a/31298343)
- [Understanding JavaScript's map()](http://www.discovermeteor.com/blog/understanding-javascript-map/)
- [Learn & Understand JavaScript’s Map Function](https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783)
- [Learn & Understand JavaScript’s Filter Function](https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206)
- [Learn & Understand JavaScript’s Reduce Function](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc)
- [Quick Tip: How to Sort an Array of Objects in JavaScript](https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/)
