#!/usr/bin/node

const argument = process.argv[2];
const integerarg = parseInt(argument, 10);

if (isNaN(integerarg)) console.log('Not a number');
else console.log(`My number: ${integerarg}`);
