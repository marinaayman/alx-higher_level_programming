#!/usr/bin/node

const x = process.argv[2];
const xint = parseInt(x, 10);

if (isNaN(xint)) console.log('Missing number of occurrences');
else {
  for (let i = 0; i < xint; i++) {
    console.log('C is fun');
  }
}
