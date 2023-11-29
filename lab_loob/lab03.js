// จำนวนดอกจัน
const numFlowers = 4;

// วนลูปตามจำนวนดอกจัน
for (let i = 1; i <= numFlowers; i++) {
    // วนลูปแสดง * ตามจำนวน i
    let flower = '';
    for (let j = 1; j <= i; j++) {
        flower += '* ';
    }
    // แสดงผลลัพธ์ของแต่ละดอกจันใน console
    console.log(flower);
}

// ใช้ \n เพื่อเพิ่มเว้นวรรค
console.log('\n');
