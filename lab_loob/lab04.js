// จำนวนบรรทัด
const rows = 8;
// วนลูปเพื่อสร้างรูปแบบ
for (let i = 1; i <= rows; i++) {
    // วนลูปเพื่อพิมพ์ตัวเลขในแต่ละบรรทัด
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += j + ' ';
    }
    console.log(line);
}