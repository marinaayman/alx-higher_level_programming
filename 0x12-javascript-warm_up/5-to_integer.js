#!/usr/bin/node

let firstArgument = process.argv[2];
let toInteger = parseInt(firstArgument, 10);

if (toInteger !== toInteger) console.log('Not a number');
else console.log(`My number: ${toInteger}`);

