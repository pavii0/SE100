function fetchData(): Promise<string> {
    // Write your code here
    
    const fetchDataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data retrieved")
        }, 1000)
    })
    return fetchDataPromise
}

function processData(data) {
    // Write your code here
    const processData = data + " and processed"

    const processDataPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(processedData)
        },2000)

    })
    
    return processDataPromise
}

function displayData(data) {
    // Write your code here

    console.log(data)

}

// Chaining the functions
fetchData()
    .then((rawdata) => { //explicit return
        // do other operations
        return processData(rawdata)
    })

    .then((processedData) => displayData(processedData)); //implicit return 