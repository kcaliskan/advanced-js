# Function Invocation

_Function Expression_
This function is defined at runtime. When we actually run the function or call the function or execute the function or innoke the function.

var canada = () => {
console.log('cold');
}

_Function Decleration_
This function gets defined at parse time. That is when the compiler initially looks at the code and starts hoisting and allocating memory.

function india(){
console.log('warm');
}

_Function Invocation/Call/Execution_
canada();
india();
