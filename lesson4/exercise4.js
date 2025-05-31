const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

let total = 0

let i = 0
while (i < MSFTStockClosingPrices.length){ //msft length is 2, since 2 objects 
    // run repeatedly 
    const weeklyPrices = MSFTStockClosingPrices[i] //accessing object in array (0, 1)
    for (let day in weeklyPrices){
        total += weeklyPrices[day]
    }

    i += 1 //prevent infinite loop
}

console.log('the total is ', total.toFixed(2))