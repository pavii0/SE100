const names = [['John', 'Middle', 'Doe'], ['Jane', 'Middle', 'Doe']];

const fullNames = names.map(function(nameArray) {
   // return nameArray[0] + ' ' + nameArray[1] //but a bit tedious if long array 
   return nameArray.join(' ') //will concatenate elements in the array with a space 
})

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']

