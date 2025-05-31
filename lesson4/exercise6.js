
function inBetween(ticker, closingPrices, start, end){
    let count = 0

    for (i = 0; i < closingPrices.length; i++)
    {
        if ((closingPrices[i] >= start) && (closingPrices <= end))
        {
            count += 1
        
        }
    }
    console.log(`Closing price of ${ticker} between ${start} to ${end}: ${count} days`)
}

const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];

getBetween('MSFT', MSFTStockClosingPrices, 254, 260)
getBetween('AAPL', AAPLStockClosingPrices, 254, 260)

//making functions easy to change 