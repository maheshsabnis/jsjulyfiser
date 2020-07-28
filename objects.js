// the object literal
// this can have propetries and methods
// note: this is always a Singleton object for a scope(?)
// scope: JS file, method, etc. 
// Object Literal is also known as JSON Data object.  
var o1 = {};
console.log(typeof(o1));
// defining schema properties for the object
o1.fname = 'Mahesh';
o1.lname = 'Sabnis';
console.log(o1.fname + '  ' + o1.lname);
o1.fn1 = function() {
    console.log('I am a function in object o1');
};
o1.fn1(); // invoke the fn1() function from o1
// iterate over the Object
for (var p in o1) {
    console.log(p);
}

var o2 = {
    x: 10,
    y: 20
};
console.log(o2.x + ' ' + o2.y);
// serializing the Object Literal in string from JSON
console.log(JSON.stringify(o2));