const numbers = [5, 3, 8, 2, 1, 4, 7, 6];

const sort = numbers.reduce((a, b) => {
  const insertIndex = a.findIndex((c) => b < c);
  if (insertIndex === -1) {
    a.push(b);
  } else {
    a.splice(insertIndex, 0, b);
  }
  return a;
}, []);

console.log(sort)