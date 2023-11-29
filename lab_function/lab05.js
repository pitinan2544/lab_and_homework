function displayPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
      let isPrime = true;
  
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        console.log(number);
      }
    }
  }
  
  // ตัวอย่างการใช้งาน
  displayPrimes(20);
  