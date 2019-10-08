## Call Stack (aka Execution Stack)

1. Call stack stores functions and variables.

2. It runs in a first in - last out mode.

3. Call stack is where the engine keeps track of where your code is and it's execution.

**Stack Overflow**

In software, a stack overflow occurs if the call stack pointer exceeds the stack bound. The call stack may consist of a limited amount of address space, often determined at the start of the program. The size of the call stack depends on many factors, including the programming language, machine architecture, multi-threading, and amount of available memory. When a program attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds, which is essentially a buffer overflow), the stack is said to overflow, typically resulting in a program crash. [Wikipedia](https://en.wikipedia.org/wiki/Stack_overflow)

## Memory Heap

1. We use the memory heap to actually point to different variables and obhects and data that we store so that we know where to look.

2. Memory heap is where the memory allocation happens.
