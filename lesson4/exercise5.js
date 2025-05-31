function getBetween(closingPrices) {
	
    //add some checks for your input, e.g to ensure input isnt null
    let count = 0
	for (let i = 0; i < closingPrices.length; i++){
        const currentElement = closingPrices[i]

        if ((currentElement >= 254) && (currentElement <= 257)) {
            count += 1
        }
    }

    console.log("Number of closing prices between 254 and 257: ", count)
    // does not return any value 
}

const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const differentPrices = [45.124, 92.45, 124.56]

// invoke your function
getBetween(MSFTStockClosingPrices); //can reuse with different data sets 
getBetween(differentPrices)


