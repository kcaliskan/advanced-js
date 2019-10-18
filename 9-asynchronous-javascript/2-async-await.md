# Async Await

Async await is built on top of promises. The benefit of async await is that it makes code easier to read.

With Promise:

```
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left))
```

Async await version:

```
async function playerStart(){
  const firstMove = await movePlayer(100, 'Left');
  await movePlayer(400, 'Left');
  await movePlayer(10, 'Right');
  await movePlayer(350, 'Left');
}
```

**How `async await` works**

- We first declare a function as async we let javascript know hey this is an async function.

`async function playerStart(){`

- Inside of this function but we have access to a new word because we used the async word to define this function. We have the `await` keyword and this `await` keyword says 'hey pause this function until I have something for you' so we're awaiting their response.

We can use this `awake` keyword in front of any function that returns a promise. Once the promises resolved then the function moves to the next line and it awaits the next move and awaits the next move and awaits the next move.

- The cool thing about the code above that instead of chaining it like that, we can now assign just like a synchronous programming variable:

```
async function playerStart(){
  const firstMove = await movePlayer(100, 'Left');
  const move1 = await movePlayer(400, 'Left');
  const move2 = await movePlayer(10, 'Right');
  const move3 = await movePlayer(350, 'Left');
}
```

**Asyn await with an API example**

```
async function getPhotos(){
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos');

  const data = await photos.json();

  console.log(data);
}

getPohotos()
```

This is what we have before `async await`:

```
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(resp => resp.json())
  .then(console.log(resp))
```

This is the syntax with `asyn await`:

```
async function getPhotos(){
  const photos = await fetch('https://jsonplaceholder.typicode.com/photos');

  const data = await photos.json();

  console.log(data);
}
```

Another example with `async await`;

What we have with `Promise`:

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

What we have with `async await`:

```
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos"
];

const getData = async function() {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  );

  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData();
```

**Catching erros with `async await`**

```
const urls = [
  "https://jsonplacseholders.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos"
];

const getData = async function() {
try{
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  );

  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);

}catch(err){
    console.log('oops', err);
  }
};
getData();
```
