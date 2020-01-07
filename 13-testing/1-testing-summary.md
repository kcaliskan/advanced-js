## Unit Testing, TDD, and BDD

### Unit Testing

A unit test focuses on a single “unit of code” – usually a function in an object or module. By making the test specific to a single function, the test should be simple, quick to write, and quick to run. This means you can have many unit tests, and more unit tests means more bugs caught.

What can we get from this definition? In short, a unit test is a program that:

- invokes some piece of code;
- compares the result of said invocation with some desired behavior; and
- accomplishes all of that without human intervention.

**And What About the Unit?**\
Intuitively, one can view a unit as the smallest testable part of an application. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, but could be an individual method.

OR

A unit of work is a single logical functional use case in the system that can be invoked by some public interface (in most cases). A unit of work can span a single method, a whole class or multiple classes working together to achieve one single logical purpose that can be verified.

## TDD: Unit Testing Driving You to Better Design

TDD means Test Driven Development. It’s a software development methodology in which unit tests are used to drive the development of the application.

**but How Does TDD Work?**

The process of applying TDD is itself very simple. You should write code following what’s called the “red-green-refactor” cycle:

- Before starting to implement a feature, you should write a test for it.
- The test will obviously fail, since the thing being tested doesn’t exist.
- You then proceed to write the minimum amount of code that will make the test pass. Cheating (i.e., taking a shortcut that doesn’t really solve the problem but causes the test to pass) is not only allowed, but actively encouraged.
- As soon as the testing passes, it’s time for refactoring (i.e., improving the code without changing its behavior).

Proponents of TDD claim that by following this process you’ll achieve a simpler design, creating modules that are by definition low coupled and having more confidence to make changes to the code in the future, since you’ll have an automated test suite covering all of the code.
