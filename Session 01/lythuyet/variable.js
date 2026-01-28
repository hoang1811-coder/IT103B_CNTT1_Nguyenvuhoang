/*
   variale : Biến : Dùng để lưu trữ dữ liệu
    3 từ khoá để khai báo biến :
         1. var
             + có thể khai báo lại
             + có thể gán lại giá trị
             + có hosting và truy cập được
             + phạm vi hoạt động : function
         2. const (ES6_2015)
             + không thể khai báo lại
             + không thể gán lại giá trị
             + có hosting nhưng không truy cập được
             + Phạm vi hoạt động : block scope
         3. let (ES6_2015) 
             + không thể khai báo lại
             + có thể gán lại giá trị
             + có hosting nhưng không truy cập được
             + Phạm vi hoạt động : block scope
    - Từ khoá khai báo biến : 3
    + Tên biến : 
        + Viết tên theo tiếng anh
        + Tuân theo quy tắc con lạc đà camel case
        + Không bắt đầu bằng số
        + Tránh các từ khoá đặc biệt ( let , var , const , class ...)
    + Giá trị của biến : mang giá trị thuộc một kiểu dữ liệu    
 */ 
var fullName = "Nguyễn Văn A"
console.log(fullName);
{
    let a = 6;
}
