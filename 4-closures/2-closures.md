# Closures

1. Closures allow a function to access variables from an enclosing scope or environment event after it leaves the scope in which it was declared.

```
function a(){
 let grandpa = 'grandpa';
  return function b(){
    let father = 'father';
    return function c(){
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()()(); // 'grandpa > father > son'
```

Because function c is inside of function a and function b, the JavaScript engine is going to say "allright I'll create a closure for you. All of the variables outside of the function c. I'm going to keep around them if function C is using it."
