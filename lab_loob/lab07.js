// ฟังก์ชันเพื่อตรวจสอบว่าเป็นจำนวนเฉพาะหรือไม่
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// แสดงจำนวนเฉพาะตั้งแต่ 1 ถึง 100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
