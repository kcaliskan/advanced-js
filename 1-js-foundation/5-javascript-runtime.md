## JavaScript Runtime

<img src="../img/js-foundation-js-runtime-001.png"
     alt="JavaScript Runtime"
     style="width: 400px; height: 400px margin: 0 auto;" />

1. Javascript is a single threaded language that can be non-blocking.

2. JavaScript runtime has one stack and one heap storage.

3. Stack is LIFO (last in, first out) data storage which store current function execution context of a program.

4. Until a function returns something (while function is executing), it won’t be popped out from the stack. Stack will pop entries one by one as soon as that entry (function) returns some value, and it will continue pending function executions.

5. At each entry, state of the stack also called as stack frame. If any function call at given stack frame produces an error, JavaScript will print stack trace which is nothing but a snapshot of code execution at that stack frame.

6. Since JavaScript is single threaded, it has only one stack and one heap. Hence, if any other program want to execute something, it has to wait until previous program is completely executed.

7. Browser comes with a JavaScript engine which provides JavaScript runtime environment.

8. JavaScript runtime actually consist of 2 more components viz. event loop and callback queue. Callback queue is also called as message queue or task queue.

9. Browsers use low level language like C++ to perform these operations and provide clean JavaScript API to work with. These APIs are known as Web APIs.

10. These Web APIs are asynchronous. That means, you can instruct these APIs to do something in background and return data once done, meanwhile we can continue further execution of JavaScript code.

11. While instructing these APIs to do something in background, we have to provide a callback function.

12. So when you call a function, it gets pushed to the stack. If that function contains Web API call, JavaScript will delegate control of it to the Web API with a callback function and move to the next lines until function returns something. Once function hits return statement, that function is popped from the stack and move to the next stack entry.

13. Meanwhile, Web API is doing it’s job in the background and remembers what callback function is associated with that job. Once job is done, Web API binds result of that job to callback function and publishes a message to message queue (AKA callback queue) with that callback. The only job of event loop is to look at callback queue and once there is something pending in callback queue, push that callback to the stack. Event loop pushes one callback function at a time, to the stack, once the stack is empty. Later, stack will execute callback function.

<img src="../img/js-foundation-js-runtime-002.png"
     alt="JavaScript Runtime"
     style="width: 400px; height: 400px margin: 0 auto;" />

**Node Runtime**

<img src="../img/js-foundation-node-runtime-003.jpg"
     alt="JavaScript Runtime"
     style="width: 400px; height: 400px margin: 0 auto;" />

**Sources**

1. [How JavaScript works in browser and node? ](https://itnext.io/how-javascript-works-in-browser-and-node-ab7d0d09ac2f)

2. [Loupe](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

3. [Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code](https://www.freecodecamp.org/news/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964/)

4. [How JavaScript works: an overview of the engine, the runtime, and the call stack](hhttps://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

5. [How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code](https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e)

6. [Launching Ignition and TurboFan](https://v8.dev/blog/launching-ignition-and-turbofan)
