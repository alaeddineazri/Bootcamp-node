const fs = require('fs');

const lines =fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(lines);




// var contents = fs.readFileSync(process.argv[2]);
// var lines = contents.toString().split('\n').length - 1;

// console.log(lines);