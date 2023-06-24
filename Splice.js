function Splice(arr, start, deleteCount,...items) {
    console.log(items.shift())
return arr.reduce((result, current, index) => {
   
 if (index < start || index >= start + deleteCount) {
   result.push(current);
 } 
else if (items.length > 0) {
   result.push(items.shift());
 }

 return result;
}, []);

}
const c=[1,2,3,5,6]

const d= Splice(c,2,4,5,4,3,4)
console.log(d)


