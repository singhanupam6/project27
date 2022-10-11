const Array=[12,324,213,4,2,3,45,4234];
const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = Array => {
    const filtered = Array.filter(el => !isPrime(el));
    return filtered;
 };
 console.log(filterPrime(Array));