const url = "https://www.alphavantage.co/query?" +
"function=EARNINGS&symbol=IBM&apikey=WS0ZD3WKXSCGFU1R"

fetch (url)
.then(response => {
    // response is the full response object

    // we are only interested in the body
    // json() returns a promise

    return response.json()
})
.then(data => {
    //do something with the data
    // which is now a javascript object

    console.log(data)
})