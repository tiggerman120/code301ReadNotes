# class 1

## Map and Reduce methods explanation

The map array method "maps"(creates a second array with the data from the input array) over the array running whatever logic you tell it and then outputs the result as a new array.

The reduce array method takes the input array and with the logic you provide reduces it down to whatever you specify. Whether that be an individual item or only the objects with a subclass of dog.

## Sample Text

```JS

let url = 'https://swapi.dev/api/people/'
function getCharacters() {
  superagent.get(url)
  .then(data => {
    console.log(data.body);
  })
}

```

```JS

let url = 'https://swapi.dev/api/people/'
async function getChars(chars) {
  let results = await superagent.get(url);
  console.log(results.body);
}
getChars();

```

## Promises and Explanations

A promise is just an object that may return a single value later on. It may be a resolved value or a reason the value is not resolved(error).
the promise has three states
resolved
rejected
pending
Promises are eager which just means they'll start doing what you tell it to as soon as the constructor is invoked.

not all callbacks are async.
not all callback functions are doing things asynchronously
async callbacks typically get information from an outside resource
the array.sort callback for instance is not async.
