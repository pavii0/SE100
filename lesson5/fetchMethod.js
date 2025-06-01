// fetch accepts one parameter

fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast').then(
    response => {
        // response is the full response object

        // we are only interested in the body
        // json() returns a promise
        return response.json()
    })
.then(data => {
    // do something with the data

    // which is now a javascript object
    console.log(data)
})