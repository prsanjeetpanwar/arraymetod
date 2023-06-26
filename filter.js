const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = numbers.reduce((a, b) => {
  if (b % 2 == 0) {
    a.push(b);
  }
  return a;
},[]);

console.log(filter); 