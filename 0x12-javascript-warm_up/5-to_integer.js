#!/usr/bin/node

let argument = process.argv[2];
let integerarg = parseInt(argument, 10);

if (integerarg !== integerarg) console.log('Not a number');
else console.log(`My number: ${integerarg}`);

