
function removeDuplicate(arr){
    var exists ={},
        Arrnew = [], 
        elm;
  
    for(var i =0; i<arr.length; i++){
      elm = arr[i];
      if(!exists[elm]){
        Arrnew.push(elm);
        exists[elm] = true;
     }
    }
    return Arrnew;
  }
  const c= removeDuplicate([1,3,3,3,1,5,6,7,3,5,25,2,5,2,53,52,5,2,4,24,53,5,24,25,24,248,1]);
  console.log(c)
    