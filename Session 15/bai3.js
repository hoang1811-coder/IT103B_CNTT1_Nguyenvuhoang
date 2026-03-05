document.getElementById("them").onclick = function(){

let ten = document.getElementById("monhoc").value.trim()

if(ten === ""){
alert("tên môn học không được để trống")
return
}

let li = document.createElement("li")
li.textContent = ten

document.getElementById("danhsach").appendChild(li)

document.getElementById("monhoc").value = ""

}