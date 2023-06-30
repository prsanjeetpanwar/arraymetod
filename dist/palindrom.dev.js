"use strict";

function palindrome(string) {
  var len = string.length;

  for (var i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }

  return 'It is a palindrome';
}

var string = 'rammar';
var a = palindrome(string);
console.log(a);