function login(username, password) {
    if (username === "admin" && password === "P@ssw0rd") {
      console.log("Login สำเร็จ");
    } else {
      console.log("Login ไม่สำเร็จ");
    }
  }
  
  // ตัวอย่างการใช้งาน
  login("admin", "P@ssw0rd");   // Login สำเร็จ
  login("user", "password123"); // Login ไม่สำเร็จ
  