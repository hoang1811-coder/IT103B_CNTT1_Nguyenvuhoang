function them(){

let task=document.getElementById("task").value.trim()

if(task===""){
alert("không được để trống")
return
}

let li=document.createElement("li")

li.innerHTML=task+' <span onclick="xoa(this)">X</span>'

document.getElementById("danhsach").appendChild(li)

document.getElementById("task").value=""

}

function xoa(btn){

if(confirm("bạn có chắc muốn xoá nhiệm vụ này?")){
btn.parentElement.remove()
}

}