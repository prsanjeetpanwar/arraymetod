"use strict";

var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var a in obj) {
  console.log(a, obj[a]);
}