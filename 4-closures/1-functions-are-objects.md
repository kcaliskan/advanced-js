## Functions are Objects

1. Functions are a special type of object called "callable" object. Bracket notation () for the invoking the function, contains the code, it has and it also has some properties like `call`, `apply` and `bind`.

![js-functions-are-objects-1](../img/js-functions-are-objects-1.png)

2. Functions are first class citizens in JS. Functions can be assigned to variables and properties of objects.

```javascript
var stuff = function() {};
```

3. We can also pass functions as arguments into another function.

```javascript
function a(fn) {
  fn();
}

a(function() {
  console.log("hi there");
});
```

4. We can return functions as a values from other functions.

```javascript
function b() {
  return function c() {
    console.log("bye");
  };
}

var d = b();
d();
```

## Higher Order Functions (HOF)

1. Higher order functions are simply a function that can take a function as an argument or a function that returns another function.
