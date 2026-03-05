function checkEmail(){

let email=document.getElementById("email").value

let dk=email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))

let kq=document.getElementById("ketqua")

if(dk){
kq.innerText="email hợp lệ!"
kq.style.color="green"
}else{
kq.innerText="email không hợp lệ!"
kq.style.color="red"
}

}