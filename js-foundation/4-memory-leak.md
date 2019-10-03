### Memory Leak

## Main Reasons for Memory Leak

**Global Variables**

1. If hypothetically I just keep adding variable to my enviroment while we're adding more and more pieces of memory and these where objects and deeply nested objects we can see below the memory being used up more and more and more.

```
var a = 1;
var b = 1;
var c = 1;
```

**Event Listeners**

1. Event listeners is one of the most common ways to leak memory and that is we add these event listeners and then we never remove them when we don't need them.

**setInterval**

1. setInterval where we have the setInterval function that does something and inside of here we satart referencing objects and these objects in here are going to will never be collected by the garbage collector because of this setInterval unless we clear it and stop it is going to keep running and running and running.

**Articles**

1. [Garbage Collection in Redux Applications](https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications)
