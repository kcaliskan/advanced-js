# Promises

A promise is an object that may produce a single value some time in the future. Either a resolved value, or a reason that it's not resolved (rejected). A promise can be in one of three possible states; `fulfilled`, `rejected`, or `pending`.

Promises are great for asynchronous programming. When we don't want JavaScript to block the execution of our code, like making API calls, grabbing data from a database or maybe optimizing an image. We use promise so that the task happens in the background when the promise gets resolved or rejected then we'll get that response.

Promises are a bit like event listeners except a promise can only succeed or fail once. It cannot succeed or fail twice.

**We have `callbacks` before `Promises`**

callback examples:

```
el.addEventListener('click', submitForm);
```

callback version:

```
movePlayer(100, 'Left', function(){
  movePlayer(400, 'Left', function(){
    movePlayer(10, 'Right', function(){
      movePlayer(330, 'Left', function(){
      });
    });
  });
});
```

Promise version:

```
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left))
```

## Promises

**How we do listern for when the status of a promise changes?**

When the status of a promise changes to fulfilled, which it will when we call resolve, the function that we pass to `.then` is going to get invoked. And when the status of the promise changes to rejected, which it will when we call reject, the function that we pass to `.catch` is going to be invoked.

Basic Promise code:

```
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Stuff Worked');
  }else{
    reject('Error, it broke');
  }
})
```

Once the promises resolved or rejected, we can get the result with `.then()`;

```
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Stuff Worked');
  }else{
    reject('Error, it broke');
  }
})

promise.then(result => console.log(result));
```

**Promise Chaining**

```
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Stuff Worked');
  }else{
    reject('Error, it broke');
  }
})

promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2);
  })

```

**How to Catch an Error**

```
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Stuff Worked');
  }else{
    reject('Error, it broke');
  }
})

promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error
    console.log(result2);
  })
  .catch(() => console.log('errrror!'))
```

`.catch()` catches any error that may happen between chains of `.then()`.

Where we put the `.catch()` is matters a lot.

if we put the `.catch()` like the code below:

```
promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2);
  })
  .catch(() => console.log('errrror!'))
  .then(result3 => {
     throw Error
    console.log(result3 + '!');
  })
```

We will get `Promise Error` message but not the `.catch()`'s error message, which is 'errrror!'. Becase we put the `.catch()` in the middle of the chain and it couldn't catche the error at the end.

**Promise.all()**

```
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Stuff Worked');
  }else{
    reject('Error, it broke');
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'POOKIE');
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?');
})

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })
```

**Promise with an API example**

```
const urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/comments', 'https://jsonplaceholder.typicode.com/albums', 'https://jsonplaceholder.typicode.com/photos']

const urlResponse = Promise.all(urls.map( URL => {
    return fetch(URL).then(resp => resp.json())
  }))
    .then(array => {
      console.log('users', array[0])
      console.log('posts', array[1])
      console.log('albums', array[2])
    }).catch('oops')

```
