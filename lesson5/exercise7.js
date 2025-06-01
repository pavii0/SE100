const url = "https://www.alphavantage.co/query?" +
"function=EARNINGS&symbol=IBM&apikey=WS0ZD3WKXSCGFU1R"

fetch (url)
.then(response => {
    // response is the full response object

    // we are only interested in the body
    // json() returns a promise

    return response.json()
})
.then(earningsData => {
    //do something with the data
    // which is now a javascript object

    console.log(earningsData)

    // array of annual earnings
    // each element in this array is an object

    const annualEarningsData = earningsData["annualEarnings"]
    
    //loop through the entire array to check for 2020 year

    for (let i = 0; i < annualEarningsData.length; i++)

    // {
    //     fiscalDateEnding: "something"
    //     reportedEPS: 10
    // }

    {
        const current = annualEarningsData[i]
        if (current["fiscalDateEnding"] === "2020-06-30") {
            console.log(current["reportedEPS"])
        }

        if (current["fiscalDateEnding"].includes("2020")) {
            console.log(current["reportedEPS"])
        }
    }
})