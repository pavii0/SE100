// //2D Array: nested array
const myArray = [
    [1,2,3], // i = 0
    [4,5,6], // i = 1
    [7,8]    // i = 2
]

// console.log(myArray[1])

// // [4, 5 ,6]
// console.log(myArray[1][2]) // 6

//use nested for loop to access nested array

for (let i = 0; i < myArray.length; i++){
    const nestedArray = myArray[i]
    console.log(`i ${i} nestedArray: ${nestedArray}`)

    //second for loop to access the nested array 
    for (let j = 0; j < nestedArray.length; j++)
    {
        console.log(nestedArray[j])    }
}