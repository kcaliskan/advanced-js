## Call Stack (aka Execution Stack)

1. At the most basic level, the call stack is a data structure that utilizes the Last in, First out(LIFO) principle to store and manage function invocation.

2. Each entry in the Call Stack is called a Stack Frame.

3. Call stack stores functions and variables.

4. It runs in a Last in - Firs out mode (LIFO).

5. Call stack is where the engine keeps track of where your code is and it's execution.

**Stack Overflow**

In software, a stack overflow occurs if the call stack pointer exceeds the stack bound. The call stack may consist of a limited amount of address space, often determined at the start of the program. The size of the call stack depends on many factors, including the programming language, machine architecture, multi-threading, and amount of available memory. When a program attempts to use more space than is available on the call stack (that is, when it attempts to access memory beyond the call stack's bounds, which is essentially a buffer overflow), the stack is said to overflow, typically resulting in a program crash. [Wikipedia](https://en.wikipedia.org/wiki/Stack_overflow)

## Memory Heap

1. Languages, like C, have low-level memory management primitives such as malloc() and free(). These primitives are used by the developer to explicitly allocate and free memory from and to the operating system.

At the same time, JavaScript allocates memory when things (objects, strings, etc.) are created and “automatically” frees it up when they are not used anymore, a process called garbage collection. This seemingly “automatical” nature of freeing up resources is a source of confusion and gives JavaScript (and other high-level-language) developers the false impression they can choose not to care about memory management. This is a big mistake.

2. Memory heap is where the memory allocation happens.

3. We use the memory heap to actually point to different variables and objects and data that we store so that we know where to look.

## Memory life cycle

No matter what programming language you’re using, memory life cycle is pretty much always the same:

Here is an overview of what happens at each step of the cycle:
Allocate memory — memory is allocated by the operating system which allows your program to use it. In low-level languages (e.g. C) this is an explicit operation that you as a developer should handle. In high-level languages, however, this is taken care of for you.
Use memory — this is the time when your program actually makes use of the previously allocated memory. Read and write operations are taking place as you’re using the allocated variables in your code.
Release memory — now is the time to release the entire memory that you don’t need so that it can become free and available again. As with the Allocate memory operation, this one is explicit in low-level languages.

## Sources

[How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
