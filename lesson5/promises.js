//promises represent the eventual success or fialure of 
// an asynchronous operation, along with its resulting value

// create a promise
// use the new() constructor 

// constructor accepts 1 parameter, which is an executor function
// which has 2 parameters - resolve and reject 

const myPromise = new Promise((resolve, reject) => {
    // our aysnchronous tasks

    setTimeout(() => {
        resolve("Promise resolved!");
}, 1000);

    // fetch some data from another server
    // someValueThatWeWantToReturn = 12245

    //done (need to return the value)
    resolve (someValueThatWeWantToReturn)

    //perhaps there is an error (not successful)
    reject("some particular error message")

    //can only call resolve or reject, cannot call at the same time
})

// using the promise

const myPromise = new Promise((resolve, reject) => {
    // asynchronous tasks

    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
})

console.log('start...')

// .then() accepts 1 parameter,
// function that processes the returned value
// this function accepts 1 parameter

myPromise.then((resolveValue) => {
    // do whatever you want with the resolved value
    // and continue processing

    console.log('result: ', resolveValue)
})

//above is a long running operation, so some other day will run first instead of the above
console.log('some other day...')
