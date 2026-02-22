let students = ["hoa", "thu", "lan", "ngoc", "minh"];
let result = [];

// viết hàm hiển thị danh sách sinh viên
function renderStudent(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`${arr[i]} <br>`);
    }
}

renderStudent(students);

// sử dụng prompt cho người dùng nhập từ khóa tìm kiếm sinh viên sau đó hiển thị sinh viên
let studentName = prompt("mời nhập từ khóa tìm kiếm");
console.log("studentName", studentName);

for (let i = 0; i < students.length; i++) {
    if (students[i].includes(studentName)) {
        result.push(students[i]);
    }
}

document.write("*************<br>");
console.log("result", result);
renderStudent(result);

/* Cho người dùng nhập vào email đăng kí 
Kiểm tra nếu có ký tự @ thì hiển thị email hợp lệ 
Không có thì không hợp lệ
*/

function checkEmail() {
    let email = prompt("Nhập email đăng kí");

    // kiểm tra email có chứa ký tự @ hay không
    if (email.includes("@")) {
        alert("Email hợp lệ");
        return true;
    } else {
        alert("Email không hợp lệ");
        return false;
    }
}
checkEmail();

