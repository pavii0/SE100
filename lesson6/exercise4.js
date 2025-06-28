const strings = ['hello', 'world', 'javascript'];

const lengths = strings.map(function(currentString) {
    return currentString.length
});

console.log(lengths); // Output: [5, 5, 10]

