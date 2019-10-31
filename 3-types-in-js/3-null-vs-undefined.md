# Null vs Undefined

`null` is used to define something programmatically empty. `undefined` is meant to say that the reference is not existing. A `null` value has a defined reference to "nothing". If you are calling a not existing property of an object, then you will get `undefined`. If I would make that property intentionally empty, then it must be `null` so you know that it's on purpose. Many javascript libraries work like this way.

**`undefined`**

In JavaScript, `undefined` means a variable has been declared but has not yet been assigned a value.

Unassigned variables are initialized by JavaScript with a default value of `undefined`.

If we declare a variable with `var`, it will be hoisted in the creation phase and it's vallue will be assigned to `undefined`.

```javascript
var TestVar;
alert(TestVar); //shows undefined
alert(typeof TestVar); //shows undefined
```

When looking up non-existent properties in an object, you will receive `undefined` (because the object is defined but not the property):

```javascript
var d = {};
console.log(d.fake);
// undefined
```

**`null`**

`null` is an assignment value. It can be assigned to a variable as a representation of no value:

```javascript
var TestVar = null;
alert(TestVar); //shows null
alert(typeof TestVar); //shows object
```

There are two features of `null` we should understand:

- `null` is an empty or non-existent value.
- `null` must be assigned.

**`undefined` and `null` in other programming languages**

When a variable is `undefined`, or unitialized, in most programming languages it means that a space in memory has been assigned to a variable name, but the programmer has not yet done anything with that space in memory. This usually results in a compile time error.

When a variable is `null` in other programming languages, `null` is typically a keyword to indicate the space in memory is a pointer (reference), and that pointer is pointing to an invalid memory address (usually 0x0). This is usually used when a programmer is done using the value of a variable and wants to purposefully clear it by literally pointing it to nothing.

**More On**

From the preceding examples, it is clear that `undefined` and `null` are two distinct types: `undefined` is a type itself (`undefined`) while `null` is an object.

```javascript
null === undefined; // false
null == undefined; // true
null === null; // true
```

and

```javascript
null = 'value' // ReferenceError
undefined = 'value' // 'value'
```

# Sources

- [What is the difference between null and undefined in JavaScript?](https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)
- [A brief history of Null and Undefined in JavaScript](https://medium.com/@stephenthecurt/a-brief-history-of-null-and-undefined-in-javascript-c283caab662e)
- [com2ghz](https://stackoverflow.com/questions/6604749/what-reason-is-there-to-use-null-instead-of-undefined-in-javascript#comment58111400_28825847)
