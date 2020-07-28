var arrString = ['Tejas', 'Mahesh', 'Ramesh', 'Ram', 'Sabnis'];

//remove last value from array
// console.log(arrString.pop());

arrString.sort();
console.log('Soring the array');
console.log(JSON.stringify(arrString));

// shift() method to remove the first element
arrString.shift();
console.log('After Shift the array');
console.log(JSON.stringify(arrString));
// using unshift to add a new element to array 
arrString.unshift('Mahesh');
console.log('After UnShift the array');
console.log(JSON.stringify(arrString));
// change a value at specific index
arrString[1] = "Ramrao";
console.log('After change at at specific index the array');
console.log(JSON.stringify(arrString));

// verify is a specific value is present in array
console.log(arrString.indexOf('Sabnis'));
console.log(arrString.indexOf('Ajay'));

// use 'splice()' to delete item from array
// from index 1 delete 2 elements
arrString.splice(1, 2);
console.log(JSON.stringify(arrString));
var newArr = ['Ramrao', 'Rameshrao'];
var finalArray = arrString.concat(newArr);
console.log(JSON.stringify(finalArray));
// using 'slice()' divide array into two arrays
var slicedArrays = finalArray.slice(2, 3);
console.log(slicedArrays);