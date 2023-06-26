function Slice(array, a,b){
  return array.reduce((result, current, i) => {
    if (i >= a && i < b) {
      result.push(current);
    }           
    return result;
  }, []);
}

const n = [1, 2, 3, 4, 5];


const s = Slice(n, 1, 4);
console.log(s); 

