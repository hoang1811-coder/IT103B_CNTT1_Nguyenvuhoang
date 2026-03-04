/*

DOM: document object model (Mô hình tài liệu dạng đối tượng)
AI TẠO RA DOM??
    Khi trang web được tải lên trình duyệt sẽ tạo ra một mô hình cây DOM
    GIÚP :
        + Thêm sửa xoá các phần từ HTML
        + Thêm sửa xoá các thuọc tính của HTML
        + Tạo sự kiện tương tác với các giao diện (click, hover, submit)

    CÁC THÀNH PHẦN TRONG DOM:
    1.ELEMENT
        CÁC CÁCH LẤY ELEMENT
            + Lấy theo id: document.getElementById("heading")
             ==> Trả về duy nhất ĐỐI TƯỢNG vì ID là duy nhất
            + Lấy theo class: docyment.getElemntsByClassName("title")
             ==> trả về HTML collection (gần giống mảng)
            + Lấy theo tên thẻ (TagName) : document.getElementsByTagName("p")
             ==> Trả về HTML collection (gần giống mảng)

    2.ATRIBUTE: tHUỘC TÍNH
    3.TEXT :NỘI DUNG
        innerText


    EVENT: Sự kiện tương tác

ĐỐI TƯỢNG THỰC TẾ :
    THUỘC TÍNH
    PHƯƠNG THỨC
*/
let student = {
    name :"thu",
    email: "thu@gmail.com",
    say: ()=>{
        console.log("Xin chào");
        
    }
}
let getElemntsByClassName= document.getElementsByClassName("title");
console.log("getElementsByClassName", getElemntsByClassName);
let getElementsByTagName= document.getElementsByTagName("title");
console.log("getElementsByTagName", getElementsByTagName);

function login() {
    console.log("Đăng nhập");
    
}
function checkInput() {
    console.log("Đã nhập thành công");
}
// let elementH1 = {
//     style:{
//         color:"red"
//     }
// }
// fuction đổi màu text

let flag=true;
function changeColor() {
    let elementH1 = document.getElementsByClassName("title")[0];
    if (flag) {
        elementH1.id = "heading"
        flag = false;
        
    } else {
        elementH1.id = "heading1"
        flag = true
    }
}

// Hàm function đổi màu chữ
function changeText() {
    //B1: Lấy element 
    let elementP = document.getElementById("content")
    elementP.innerHTML="<button>Thẻ P</button>"
    document.getElementById("list").innerHTML=""
}


