function ReverseString(s) {
      

    const revArray = [];
    const length = s.length - 1;
      
    for(let i = length; i >= 0; i--) {
        revArray.push(s[i]);
    }
      
    return revArray.join('');
}
  
console.log(ReverseString("Prsanjeet"))