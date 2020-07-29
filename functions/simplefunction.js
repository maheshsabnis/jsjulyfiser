function doWork() {
    console.log('do work function');
}

doWork();

function stringOprations(str, c) {
    if (c === 'U')
        return str.toUpperCase();
    if (c === 'L')
        return str.toLowerCase();

    return str;
}

console.log('Upper Case = ' + stringOprations('Mahesh', 'U'));
console.log('Lower Case = ' + stringOprations('Mahesh', 'L'));
console.log('Original = ' + stringOprations('Mahesh', 'K'));