'use strict';

function sum(numberOne) {
  return function (numberTwo) {
    return numberOne + numberTwo;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
