//6. Calc. Interest
let money = 100000;
let Interest = 2.5;
for (i = 1; i <= 10; i++){
    money = money + (money*Interest/100);
    console.log("End of the year" + i + "Tour monet is " + money)
}