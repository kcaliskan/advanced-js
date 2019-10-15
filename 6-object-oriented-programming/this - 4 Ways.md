# this - 4 Ways

1. new binding:

```
function Person(name, age) {
  this.name = name;
  this.age =age;
  console.log(this);
}

const person1 = new Person('Xavier', 55)
```

2. implicit binding: it was just implied, we didn't have to do anything.

```
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}

person.hi()
```

We created an object and inside of that object the `this` keyword will refer to person. That's implicit binding. It's the most common one.

3. explicit binding: We dictate exactly what the `this` keyword should refer to. Explicitly binding is using bind, call or apply to explicitly tell the program 'hey this is what I wan this to be'.

```
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
  console.log('hi' + this.setTimeout)
  }.bind(window)
}

person3.hi()
```

If we want `this` to refer to the window object, wa can explicitly tell it what to bind to.

4. arrow functions: We can do lexical scoping with the arrow functions, wherever we write the function that's what this binds to.

```
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
    console.log('hi ' + this.name)
  }
    return inner()
  }
}

person4.hi()
```
