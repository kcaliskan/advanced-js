# 4 Pillars of OOP

1. Encapsulation\
   Before OOP, we have procedural programming. Unlike procedural programming where we just have functions modifying data with no real structure, OOP puts things in an object in a container and organizes things into units that model rea world applications. This is encapsulation.

We wrap code into boxes that are related to one another so that these boxes can just interact with each other using the methods and prpoerties that we make available.
This makes code easier to maintain and more reusable. We have all these nice little class packages that we can just use whenever we want.

2. Absraction\
   Abstraction means just hiding the complexity from the user that is creating simpler interfaces such as "Hey, i'll take care of the class all you do is instantiate a class and there you go. Yo have an Elf with all the properties and methods.

The idea of abstraction says "hey here are the methods and properties that you can use. Don't worry abouth everything else. I'll do all the calculations behind the scenes." This reduces complexity because we can just see the methods and understand what this class can do.

3. Inheritance\
   abay inheriting from other classes, we avoid having to rewrite the same code and we also save memory space by having shared methods.

4. Polymorphism\
   The idea is the ability to call the same method on different objects and each object respondng in different way.

```
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon)
    console.log('what am i?', this);
    this.type = type;
  }
  makeFort() { // this is like extending our prototype.
    return 'strongest fort in the world made'
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() { // this is like extending our prototype.
    return 'strongest fort in the world made'
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()

```

We're simply doing method overwriting like this where the same method acts differently for each type of class.

The idea with polymorphism in OOP is hat is has the ability to process object differently depending on their data type or class.

Polymorphism is useful because we don't have to necessarily copy and paste code over and over. We can reuse some of the functionality from a superclass to adapt to our own specific needs and these are the four pillars of object oriented programming.
