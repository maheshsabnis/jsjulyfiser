// 1. using var for declarations
var n1; //  JS uses the expresion parser to define type of the variable
console.log(typeof(n1));
n1 = 100; // expression is parsed and the type is set based in R.H.S.
console.log(typeof(n1));
n1 = 'James Bond'; // string type
console.log(typeof(n1));

n1 = '007 James Bond';
console.log(typeof(n1));
var n2 = parseInt(n1); // parset n1 and interprete it in the numeric value if n1 starts from number
console.log('Typeof n2' + typeof(n2) + '  value of n2 = ' + n2);

var a = 1; // number
var b = '1'; // string

console.log('Type Check typeof a = ' + typeof(a) + ' typeof b  ' + typeof(b));

console.log(a == b); // boolean check for equality --> result is 'true' (value equality )
console.log('type equality = ' + typeof(a) == typeof(b));
console.log('Strict Equality aka deep equlaity');
console.log(a === b);