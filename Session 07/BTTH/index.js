let playerList = [];
let squadList = [];
let goatList = [];
let choose;
do {
    choose = prompt("Mời nhập lựa chọn:");
    switch (choose) {
        case 0:
            console.log("Thoát chương trình");
            
            break;
        case 1:
            let name =prompt("Nhập cầu thủ mới:");
            let goal = prompt("Nhập số bàn thắng :")
            addPlayer(goal,name);
            break;
        case 2:
            console.log("Xem danh sách đội hình");
            showSquad();
            break;
        case 3:
            console.log("Xem thành tích của toàn đội");
            
            break;
        case 4:
            for (let i = 0; i < goalList.length; i++) {
                const element = array[i];
                
            }
            
            break;        
    
        default:
            console.log("Lựa chọn không hợp lệ");
            
    }
} while (choose != 0);
// hàm thêm cầu thủ
function addPlayer(name , goal) {
    playerList.push(name)
    goalList.push(goal)
}
// hàm show danh sách đội hình
function showSquad() {
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i+1}. ${playerList[i]} - ${goatList[i]} bàn!`);
    }
}
// hàm tính thành toàn đội
function getTotalGoals() {
    let sum = 0;
    for (let i = 0; i < goatList.length; i++) {
        sum += goatList[i];
    }
    return sum;
}
// Tìm vua phá lưới
function findMosstGoats(params) {
    let max = goatList[0]
    for (let i = 0; i < goatList.length; i++) {
        if (goatList[i] > max) {
            max = goatList[i];
        } 
    }
    return max;
}