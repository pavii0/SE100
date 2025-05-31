const aaplDailyOHLC = [
	{
		Open: 75.62,
		High: 74.14,
		Low: 78.52,
		Close: 80.21
	},
	{
		Open: 80.21,
		High: 81.21,
		Low: 79.89,
		Close: 80.78
	}
]

// Loop through apple stock daily OHLC
for (let i = 0; i < aaplDailyOHLC.length; i++) {
	const currentObject = aaplDailyOHLC[i]
    console.log(currentObject)

//more efficient way to access instead of writing out the keys:

    const allKeys = Object.keys(currentObject) //array of keys
    console.log(allKeys)

    for (let keyIndex = 0; keyIndex < allKeys.length; keyIndex++){
        const currentKey = allKeys[keyIndex]
        console.log('current key is ', currentKey)
        console.log(currentObject[currentKey])
    }

}

// Expected Output:
// Inner Object: {Open: 75.62, High: 74.14, Low: 78.52, Close: 80.21}
// Open: 75.62
// High: 74.14
// Low: 78.52
// Close: 80.21
// Inner Object: {Open: 80.21, High: 81.21, Low: 79.89, Close: 80.78}
// Open: 80.21
// High: 81.21
// Low: 79.89
// Close: 80.78
