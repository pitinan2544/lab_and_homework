function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(isPrime(2));    // true
  console.log(isPrime(7));    // true
  console.log(isPrime(14));   // false
  console.log(isPrime(23));   // true
  console.log(isPrime(1));    // false
  