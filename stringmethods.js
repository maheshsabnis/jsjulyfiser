var message = "This is JavaScript string with methods demo of string type";
console.log('length of  ' + message + ' = ' + message.length);

console.log('First Index of  "string" = ' + message.indexOf('string'));
console.log('Last Index of "string" = ' + message.lastIndexOf('string'));

// search a position of a specific string 

console.log('Position of "with" = ' + message.search('with'));

console.log(message.replace('JavaScript', 'JAVASCRIPT'));

console.log(message.toUpperCase());
console.log(message.toLowerCase());