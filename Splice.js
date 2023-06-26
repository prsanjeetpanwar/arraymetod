// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function splice(arr, start, deleteCount, ...items) {
  return arr.reduce((result, current, index) => {
    if (index < start || index >= start + deleteCount) {
      result.push(current);
    } else if (items.length > 0) {
      result = result.concat(items);
      items = []; 
    }
    return result;
  }, []);
}

const c = [1, 2, 3, 5, 6];
const d = splice(c, 2, 2, 4, 7, 8,4,5,2,6,246,2,25,26,123);
console.log(d);
