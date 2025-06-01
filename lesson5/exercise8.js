//MAKING POST REQUEST

const url = "https://jsonplaceholder.typicode.com/posts"

const payload = {
    ticker: 'AAPL',
    name: "Apple Inc",
    price: 171.58
}

fetch(url, {
    methood: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
})
.then(response => {
    return response.json()
})
.then(dataa => {
    console.log(data)
})
