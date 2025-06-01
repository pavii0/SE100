console.log("Step 1");

//long running operation
setTimeout(() => {
    console.log("Step 2");
} , 1000);

console.log("Step 3");

const myArrowFunction = () => {

}


setTimeout(() => {
    // your business logic to be executed after the specified time
}, 2000)