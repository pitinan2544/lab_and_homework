// 1. ผลรวมของตัวเลขทุกตัว (1 ถึง 100)
let sumAll = 0;
for (let i = 1; i <= 100; i++) {
    sumAll += i;
}
console.log("ผลรวมทุกตัวเลข: " + sumAll);

// 2. ผลรวมของเลขคู่และเลขคี่ (1 ถึง 100)
let sumEven = 0;
let sumOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log("ผลรวมเลขคู่: " + sumEven);
console.log("ผลรวมเลขคี่: " + sumOdd);

// 3. ผลรวมของเลขที่หาร 2 ลงตัว ยกกำลัง 2 และลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (1 ถึง 100)
let sumPower2DivBy2 = 0;
let sumPower2DivBy3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumPower2DivBy2 += Math.pow(i, 2);
    }
    if (i % 3 === 0) {
        sumPower2DivBy3 += Math.pow(i, 2);
    }
}
console.log("ผลรวมเลขที่หาร 2 ลงตัว ยกกำลัง 2: " + sumPower2DivBy2);
console.log("ผลรวมเลขที่หาร 3 ลงตัว ยกกำลัง 2: " + sumPower2DivBy3);
