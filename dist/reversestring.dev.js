"use strict";

function ReverseString(s) {
  var revArray = [];
  var length = s.length - 1;

  for (var i = length; i >= 0; i--) {
    revArray.push(s[i]);
  }

  return revArray.join('');
}

console.log(ReverseString("Prsanjeet"));