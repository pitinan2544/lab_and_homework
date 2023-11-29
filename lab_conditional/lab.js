//LAB-1 : Fundamental
function checkNumber(input) {
    switch (input) {
        case 1:
            console.log("One");
            break;
        case 0:
            console.log("Zero");
            break;
        case -1:
            console.log("Minus");
            break;
        default:
            console.log("Invalid number");
    }
}

// ตัวอย่างการใช้งาน
checkNumber(0);   // แสดง "One"
// checkNumber(0);   // แสดง "Zero"
// checkNumber(-1);  // แสดง "Minus"
// checkNumber(5);   // แสดง "Invalid number"
