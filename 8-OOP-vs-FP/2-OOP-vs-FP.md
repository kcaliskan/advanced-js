# OOP vs FP

Object oriented programming and functional programming.

They are both paradigms and a programming paradigm is well writing code compliant with a specific set of rules.

For example; organizing the code into units would be called Object Oriented Programming.

Avoiding side effects and writing pure functions would be called functional programming.

An object is a box containing information and operations that are supposed to refer to the same concept or grouping it as an object. These pieces of information inside of the objects are called attributes or state and the operations that can happen on the state are known as methods.

In functional programming, the code is essentially a combination of functions and data is immutable which leads to writing programs with no side effects and pure functions because in a function, in a functional programming paradigm that function cannot change the outside world and the output value of a function simply depends on the given arguments. This allows functional programming to really have control over a program flow. In functional programming, we learned that it's all about the idea of pure functions and composing functions to act upon that data.

Functional programming is based on different concepts. We have higher order functions pure functions Referential transparency in functional programming functions are first class citizens

On the other hand, in object oriented programming objects are first class citizens and we learned about the pillars of each of these paradigms in object oriented programming.
We have abstraction, we have encapsulation where it allows us to encapsulate ideas that are related together and objects. It helps us hide irrelevant data from the user we learned about inheritance and then we learned about polymorphism.

## Pros and Cons

**Functional Programming**

// Many operations on fixed data\
functional programming is all about performing many different operation for which the data is fixed.

// Stateless\
In functional programming, we have the idea of stateless. That is we don't modify state state is immutable

// Pure\
In functional programming our functions are pure. They are no side effects, it means that the functions that we write don't make an impact on the code that is running outside of that function

With the functions that have no side effects it means that we can start running code in parallel on multiple processors and it won't have effect on our program vs. an object oriented programming where we can't do that because our functions have side effects.

// Declarative\
It's about what we want to be doing.

Functional programming says that data and behavior are distinctly different things and should be kept separate for clarity.

**OOP**

// Few operaations on common data\
Object oriented programming is about a few operations on common data in a functional program.

// Stateful\
Object oriented programming is very stateful. We are modifying state

Procedures can access and often modify the data fields of the object. We have the idea of this and self in objects and we can modify them in classes.

// Side Effect\
On object oriented programming, there are definitely side effects methods manipulate our internal state.

// Imperative\
An object oriented program which is more about how we want it to be done which is more imperative.

OOP says "hey bring together the data and the behavior in a single location called object or class." This is going to allow us to understand our program easier and be more organized.

**When should we use one over the other?**

Functional programming is quite good at processing large data for applications if you're analyzing data, user data maybe using it for a machine learning model. Functional programming works really well for high performance and processors because you can run it on multiple processors. if you have a few things that require a lot of operations a lot of little functions applied to it well then functional programming is usually a good idea.

If on the other hand you have many things like characters in a game with not too many operations with few operations will then object oriented programming might be a better solution.
