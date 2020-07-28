var obj1 = { x: 10 };
console.log('obj1.x = ' + obj1.x);
var obj2 = obj1; // simple assignment, point to same location aka deep linking
console.log('obj1.x = ' + obj1.x + '   obj2.x = ' + obj2.x);
obj2.x = 100;

console.log('after change in obj.x to 100 then , obj1.x = ' + obj1.x + '  obj2.x = ' + obj2.x);

// using Object.assign() to create a clone of the object and copy data in it
// target = Object.assign({}, source);
// {} and empty object at new location
// source, the object of which clone is to be created and data to copy
// target, the object that will point to the cloned location
var obj3 = Object.assign({}, obj1);

console.log('after cloaning and coping obj1.x = ' + obj1.x + '  obj3.x = ' + obj3.x);
obj3.x = 10000;
console.log('after updating obj3.x then, obj1.x = ' + obj1.x + '  obj3.x = ' + obj3.x);