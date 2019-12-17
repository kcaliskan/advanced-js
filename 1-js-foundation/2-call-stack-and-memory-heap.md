## Call Stack (aka Execution Stack)

1. At the most basic level, the call stack is a data structure that utilizes the Last in, First out(LIFO) principle to store and manage function invocation.

2. Call stack stores functions and variables.

3. It runs in a Last in - Firs out mode (LIFO).

4. Call stack is where the engine keeps track of where your code is and it's execution.

**Stack Overflow**

In software, a stack overflow occurs if the call stack pointer exceeds the stack bound. The call stack may consist of a limited amount of address space, often determined at the start of the program. The size of the call stack depends on many factors, including the programming language, machine architecture, multi-threading, and amount of available memory. When a program attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds, which is essentially a buffer overflow), the stack is said to overflow, typically resulting in a program crash. [Wikipedia](https://en.wikipedia.org/wiki/Stack_overflow)

## Memory Heap

1. Memory heap is where the memory allocation happens.

2. We use the memory heap to actually point to different variables and objects and data that we store so that we know where to look.
