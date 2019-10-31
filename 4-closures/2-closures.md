# Closures

1. Closures allow a function to access variables from an enclosing scope or environment event after it leaves the scope in which it was declared.

```javascript
function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

a()()(); // 'grandpa > father > son'
```

Because function c is inside of function a and function b,the JavaScript engine is going to say "allright I'll create a closure for you. All of the variables outside of the function c. I'm going to keep around them if function C is using it."

```javascript
function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    let random = 12312347732;
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

a()()(); // 'grandpa > father > son'
```

The JavaScript engine isn't going to keep "random" variable when function B is invoked and popped off from the stack because nothing using it, it is not referenced. It will be garbage collected. JavaScript engine is going to keep anything that's still being referenced by a child.

2. Closures are also called lexical scoping. Lexical means where it is written, scoping is what variable we have access. JavaScript engine before we run any code before we get to line twelve or line thirteen already knows which function has access to which variables because JavaScript is lexically scoped (statically scoped).

Exercise:

```javascript
function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = "Hi! I am now here!";
}

callMeMaybe();
```

We sent "setTimeout" function to the web API to start a timer for four seconds and then once that timer is gone, we sent "console.log" to the callback queue and the callback queue is going to wait there until the call stack is empty. "callMe" variable has technically been popped off the stack by the time "setTimeout" runs but because of closures JavaScript is able to remember "callMe" variable.

3. Memory Efficient

Closures can be very memory efficient.

```javascript
const heavyDuty = index => {
  const bigArray = new Array(7000).fill("emoji");
  console.log("created");
  return bigArray[index];
};

heavyDuty(300);
heavyDuty(200);
heavyDuty(700);

const heavyDutyClosure = () => {
  const bigArray = new Array(7000).fill("emoji");
  console.log("created again");
  return function(index) {
    return bigArray[index];
  };
};

const getHeavyDuty = heavyDutyClosure();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);
```

The first heavy duty was created three times vs heavyDutyClosure created only once. In heavyDutyClosure, we were able to create the big array once and because we knew we were going to access it a lot. We just maintain that closure scope over it and we were able to call it over and over without doing all that creation destruction work.

4. Encapsulation

Encapsulation hides information that is unnecessary to be seen by the outside world or manipulated. And this gets into the idea of principle of least privilege a big security principle when it comes to programming.

Exercise:

```javascript
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "💥";
  };

  setInterval(passTime, 1000);
  return { totalPeaceTime };
};

const ww3 = makeNuclearButton();
ww3.totalPeaceTime();
```

In this function, the outside world only can access totalPeaceTime function but they can not reach / use passTime function or launch function. This is what encapsulation does in this case. And this is one of the main benefits of closurer of data encapsulation and it refers to the idea that some data should just not be directly exposed.

Exercise 1: Make this code can only be init once.

```javascript
let view;

function initialize() {
  view = "⛰️";
  console.log("view has been set");
}
```

Solution for Exercise 1:

```javascript
let view;

function initialize() {
  let initStatus = 0;

  return function() {
    if (initStatus === 0) {
      view = "⛰️";
      console.log("view has been set!");
      initStatus++;
    } else {
      console.log("view has been already set!");
    }
  };
}

let init = initialize();
init();
init();
init();
init();
console.log(view);
```

Another Solution for Exercise 2:

```javascript
let view;
let initialize = () => {
  view = "🏔";
  console.log("view has been set!");

  initialize = () => {
    console.log("view is already initialized. Aborting..");
  };
  return initialize;
};

initialize(); // view has been set!
initialize(); // view is already initialized. Aborting..
initialize(); // view is already initialized. Aborting..

console.log(view);
```
