function getNumberPromise() {

    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
                //resolve(10)

                reject("somethign went wrong")
            }, 2000)
        })

    return myPromise
}


// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});

// for rejection case
function getNumberPromise() {

    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            setTimeout(() => {
                resolve(10)
            }, 2000)
        })
    })

    return myPromise
}


// Test the function
getNumberPromise()

.then((value) => {
    console.log(value); // Should log 10 after 2 seconds
})

.catch((rejectValue) => {
    console.log('my catch() block should handle failed promises: ', rejectValue)
})

