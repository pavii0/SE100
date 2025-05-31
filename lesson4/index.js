
//three things
//1) create a new variable to keep track of the count
//2) condition to run / terminating condition
//3) 



for (let i = 0; i < 5; i++) {

}

//             Index Numbers:    0      1      2      3      4
const stockDailyClosePrices = [75.62, 74.14, 78.52, 80.21, 79.66];

for (let i = 0; i < stockDailyClosePrices.length; i++) {
	console.log(stockDailyClosePrices[i]); // i will be 0,1,2,3,4 in each loop respectively
}

// Expected Output:
// 75.62
// 74.14
// 78.52
// 80.21
// 79.66

let total = 0
for (let i = 0; i < stockDailyClosePrices.length; i++){
    console.log(`i: ${i}, element: ${stockDailyClosePrices[i]}`)
    total += stockDailyClosePrices[i]
}

console.log(total)

//2D Array: nested array
const myArray = [
    [1,2,3], // i = 0
    [4,5,6], // i = 1
    [7,8]    // i = 2
]

console.log(myArray[1])

// [4, 5 ,6]
console.log(myArray[1][2]) // 6

let i = 0
while (i < 5) //can chain boolean conditions, as long as condition holds true, while loop will repeat
{
    console.log(`i: ${i}`)
    i += 1
}

//functions

function addTwoNumbers(){

}

//standard way of declaring functions

function formatName(companyName, companyHeader){
    // do something

    return companyName + " " + companyHeader
}

//arrow functions
const newFormatName = (companyName, companyHeader) => {
    // do something

    return companyName + " " + companyHeader
}

//arrow functions with implicit return (without curly braces)
const newFormatName2 = (companyName, companyHeader) => companyName + " " + companyName

newFormatName("a", "b")