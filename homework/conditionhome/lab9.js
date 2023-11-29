// รับค่าทางคีย์บอร์ดจากผู้ใช้
var value1 = prompt("ป้อนค่าที่ 1:");
var value2 = prompt("ป้อนค่าที่ 2:");
var value3 = prompt("ป้อนค่าที่ 3:");

// แปลงค่าที่รับมาเป็นตัวเลข
value1 = parseFloat(value1);
value2 = parseFloat(value2);
value3 = parseFloat(value3);

// นำตัวเลขมาเรียงลำดับ
var sortedValues = [value1, value2, value3].sort(function(a, b) {
  return a - b; // ในที่นี้ใช้ a - b เพื่อเรียงจากน้อยไปมาก
});

// แสดงผลลัพธ์
console.log("ตัวเลขที่เรียงจากน้อยไปมากคือ: " + sortedValues);
