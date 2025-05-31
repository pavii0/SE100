//exercise 1:
const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below

total = 0
for (let i = 0; i < MSFTStockClosingPrices.length; i++){
    total += MSFTStockClosingPrices[i]
}

console.log('The total sum of closing prices of MSFT is ' ,total)