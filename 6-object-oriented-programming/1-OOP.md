# Object-Oriented Programming in JavaScript

First step to OOP:

```
const elf = {
  name: 'Orwell',
  weapon: 'bow',
  attack(){
    return 'attack with' + this.weapon;
  }
}

const elf2 = {
  name: 'Sally',
  weapon: 'bow',
  attack(){
    return 'attack with' + this.weapon;
  }
}

elf.attack()
elf2.attack()
```

1. We do encapsulation here. It is the first step to the OOP. We've grouped funcionality together.

What is the problem with this approach / code ?

-We need to copy / paste for new elf(s). We don't keep the code dry. We are repating ourselves.

What is the solution? Let's move on to the next step.

2. Factory Functions

Factory functions as the name suggests are functions that act like factories. They create objects for us.

```
//factory functions
function createElf(name, weapon){
  return{
    name: name,
    weapon: weapon,
    attack(){
      return 'attack with ' + weapon
    }
  }
}

const peter = createElf('Peter', 'stones');
peter.attack();
```

The beauty with factory functions is that If I want to create another elf all I do is create another one with just one line:

```
const sam = createElf('Sam', 'bow');
sam.attack();
```

The problem with factory funtions is space and memory. If we need 1000s elfs, they require space in our memory to store the same data.

Name and weapon values are different for each elf but methods are not. We copy the same method for the each elf and it takes space in the memory.

How We can solve that problem? Prototypal Inheritance.

3. Object.create()

```
//Object.create()
const elfFunctions = {
  attack(){
    return 'attack with ' + this.weapon;
  }
}

function createElf(name, weapon){
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());


const sam = createElf('Sam', 'bow');
console.log(sam.attack());
```

What Object.create() does? Object.create() creates a link between the `const elfFunctions` and `let newElf`. We are doing prototypal inheritance here.

If we `console.log(newElf);` we can see that `Object.create(elfFunction)` creates an empty object.

```
function createElf(name, weapon){
  let newElf = Object.create(elfFunctions);
  console.log(newElf); // {}
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
```

But where is the `attack()` function?

When we log `console.log(newElf.__proto__)` in this code below:

```
function createElf(name, weapon){
  let newElf = Object.create(elfFunctions);
    console.log(newElf.__proto__); // { attack: [Function: attack] }
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
```

We see that `let newElf = Object.create(elfFunctions);` created prototyped chain. What we're doing with Object.create() is true prototypal inheritance.

But, what we're doing here in't necessarily object oriented programming yet.

4. Constructor Functions

In order to use a constructor function, we need to use the `new` keyword in JavaScript.

```
   function Elf(name, weapon){
     this.name = name;
     this.weapon = weapon;
   }
```

```
const peter = new Elf('Peter', 'stones');

const sam = new Elf('Sam', 'fire')
sam.name; // 'Sam'
```

The `new` keyword automatically returns the object for us(from elf function). It creates the `Elf` constructor.

Any function that is invoked using the new keyword is called a constructor function.

We won't get a syntax error if we don't use like this but as a general rule, all constructor functions should start with a capital letter.

Function constructor or constructor functions are simply that they allow use to use the new keyword and create these objects for us.

What does `new` behind the scene?
When we use the new keyword instead of `this` pointing to the windows object like it usually does, the `new` keyword changes what `this` pointing to when a new execution context is created. In our examples, `this` becomes Peter or Sam.

Simply means that if we don't initiate new elf with the `new` keyword, `this` which is inside of the `function elf` will point to the `window` object not the new object we created.

Without the new keyword, we are not creating this object and we are not returning an object. And we're also not assigning `this` to the object that calls us.

Every function in JavaScript gets automatically a prototype property.

**Power of the `prototype` object which comes with Functions`**

```
//Constructor Function
   function Elf(name, weapon){
     this.name = name;
     this.weapon = weapon;
   }

Elf.prototype.attack = function (){
  return 'attack with ' + this.weapon;
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack()) // attack with stones
const sam = new Elf('Sam', 'bow');
console.log(sam.attack()) // attack with bow
```

`Peter` and `Sam` are able to use `attack()` from the same location in memory instead of us copying attack multiple places in multiple locations in memory. We just have it written once on memory and both of these Elf(s) are going to point to `attack()` which is in the same memory space. And the beauty is that I can just keep adding functionality here.

**Arrow functions**

```
//Constructor Function
   function Elf(name, weapon){
     this.name = name;
     this.weapon = weapon;
   }

Elf.prototype.attack = () => {
  return 'attack with ' + this.weapon;
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack()) // attack with undefined
const sam = new Elf('Sam', 'bow');
console.log(sam.attack()) // attack with undefined
```

We get `undefined`. Because arrow functions are lexically scoped. They defined `this` based on where they're written. And `this` in this case is the global object.

**More Constructor Functions**

```
   function Elf(name, weapon){
     this.name = name;
     this.weapon = weapon;
     var a = 5;
     console.log('this', this)
   }

   Elf.prototype.attack = () => {
  return 'attack with ' + this.weapon;
}

const peter = new Elf('Peter', 'stones');
console.log(peter.attack())
const sam = new Elf('Sam', 'bow');
console.log(sam.attack())
```

If we do something like `var a=5;`, the constructor function is not going to add this to our Elf object. The only way we can add properties to this object is to use `this` keyword.

**`This` Keyword**

```
function Elf(name, weapon){
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon;
}

Elf.prototype.build = function() {
  function building() {
    return this.name + ' I built this'
}
return building()

const building = () => {
  return this.name + ' I built this'
}

return building()
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build())
const sam = new Elf('Sam', 'bow');
console.log(sam.build())
```

The code above will returen "undefined" because of the `this` keyword inside of the `build` function.

`This` keyword is lexically scoped and the it lose its object while invoked and attach itself to the `global object`.

We can solve this problem with three different ways:

First Solution with arrow functions:

```
function Elf(name, weapon){
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon;
}

Elf.prototype.build = function() {

  const building = () => {
  return this.name + ' I built this'
  }

  return building()
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build())
const sam = new Elf('Sam', 'bow');
console.log(sam.build())
```

Second Solution with `bind()`:

```
function Elf(name, weapon){
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon;
}

Elf.prototype.build = function() {
  function building(){
    return this.name + ' I built this'
  }

  return building.bind(this)
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build()())
const sam = new Elf('Sam', 'bow');
console.log(sam.build()())
```

Third solution with `self` keyword:

```
function Elf(name, weapon){
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return 'attack with ' + this.weapon;
}

Elf.prototype.build = function() {
  const self = this;
  function building(){
    return self.name + ' I built this'
  }

  return building()
}

const peter = new Elf('Peter', 'stones');
console.log(peter.build())
const sam = new Elf('Sam', 'bow');
console.log(sam.build())
```
