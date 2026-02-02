//Bài 1
let n = 20;
if (n % 2 === 0) {
    console.log(`Số ${n} là số chẵn!!`);
} else {
    console.log(`Số ${n} là số lẻ!!`);
}
if (n < 0) {
    console.log("Giá trị n không hợp lệ để tạo dãy số.");
} else if (n > 0) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số.");
}
// Bài 2
let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i,"fizzBuzz");
    } else if (i % 3 === 0) {
        sum += i;
        console.log(i,"fizz");
    } else if (i % 5 === 0) {
        console.log(i,"Buzz");
    } else {
        console.log(i);
    }
}
console.log("Tổng các số chia hết cho 3 là:", sum);

