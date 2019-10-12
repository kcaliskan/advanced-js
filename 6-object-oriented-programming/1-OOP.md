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

Name and weapon values are different for each elf but methods are not. We copy the same method for the each elf and it takes sace in the memory.

We can we solve that problem? Prototypal Inheritance.

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

When we log `console.log(newElf.__proto__` in this code below:

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
