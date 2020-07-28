var arrNumbers = [10, 20, 30, 'A', 'B', 'C', 40.1, 40.2, true, false]; // an empty array of objects

//iterate over the array
for (var i = 0; i < arrNumbers.length; i++) {
    console.log('Value at ' + i + 'th position = ' + arrNumbers[i]);
}
console.log();
console.log('Using for..in loop in ES 3');
for (var i in arrNumbers) {
    //    if (typeof(arrNumbers[i]) === 'number') {
    console.log('Value at ' + i + 'th position = ' + arrNumbers[i]);
    //   }
}
arrNumbers.push(100);
arrNumbers.push(200);
for (var i in arrNumbers) {
    console.log('Value at ' + i + 'th position = ' + arrNumbers[i]);
}

var arrString = ['Tejas', 'Mahesh', 'Ramesh', 'Ram', 'Sabnis'];
// array of JSON Objects
var arrEmps = [
    { EmpNo: 101, EmpName: 'Mahesh', Salary: 1100 },
    { EmpNo: 102, EmpName: 'Anil', Salary: 1200 },
    { EmpNo: 103, EmpName: 'Abhay', Salary: 1300 },
    { EmpNo: 104, EmpName: 'Nandu', Salary: 1400 },
    { EmpNo: 105, EmpName: 'Jaywant', Salary: 1500 }

];