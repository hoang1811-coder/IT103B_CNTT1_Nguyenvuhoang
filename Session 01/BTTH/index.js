let bookName = prompt("Mời nhập tên sách:").trim().toUpperCase();
let bookAuthor = prompt("Mời nhập tên tác giả:").toUpperCase();
let year = +prompt("Nhập năm xuất bản:");
let price = parseFloat(prompt("Nhập giá sách:"));
let quantity = +prompt("Nhập số lượng sách:");
let randomId = Math.floor(Math.random() * 1000) + 1;

let bookId = `${bookAuthor.slice(0, 3)}${year}-${randomId}`;

let currentYear = 2026;
let bookAge = currentYear - year;
let totalValue = price * quantity;
let shelf = Math.floor(Math.random() * 10) + 1;

console.log(`
--- PHIẾU NHẬP KHO ---

Mã sách: ${bookId}

Tên sách: ${bookName}

Tác giả: ${bookAuthor}

Năm xuất bản: ${year}

Tuổi sách: ${bookAge} năm

Tổng giá trị: ${totalValue} VNĐ

Ngăn kệ gợi ý: Kệ số ${shelf}
`);
