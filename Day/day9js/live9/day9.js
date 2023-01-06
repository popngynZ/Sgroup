function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (isPrime(i) == false) 
        continue;
  
      alert(i);  // a prime
    }
/*i=2


*/



  }
  
  function isPrime(i) {
    for (let j= 2; j < i; j++) {
      if ( i % j== 0) return false;
    }
    return true;
  }