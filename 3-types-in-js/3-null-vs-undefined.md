# Null vs Undefined

**`undefined`**
In JavaScript, `undefined` means a variable has been declared but has not yet been assigned a value.

Unassigned variables are initialized by JavaScript with a default value of `undefined`.

If we declare a variable with `var`, it will be hoisted in the creation phase and it's vallue will be assigned to `undefined`.

```javascript
var TestVar;
alert(TestVar); //shows undefined
alert(typeof TestVar); //shows undefined
```

When looking up non-existent properties in an object, you will receive `undefined`:

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
