#!/usr/bin/node
'use strict';

function factorial (num) {
  if (!num) return 1;
  else return num * factorial(num - 1);
}

const num = parseInt(process.argv[2], 10);
console.log(factorial(num));
