function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // ตัวอย่างการใช้งาน
  var result = factorial(5); // ค่าที่ได้คือ 120
  console.log(result);
  