let product = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },

    { id: 2, name: "Giò Lụa", price: 180000, img: "" },

    { id: 3, name: "Cành Đào", price: 500000, img: "" },

    { id: 4, name: "Mứt Tết", price: 120000, img: "" },

    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },

    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }
]
const cart =[
    { id: 1, name: "Bánh Chưng", price: 150000, img: "", quantity:1 },

    { id: 2, name: "Giò Lụa", price: 180000, img: "" , quantity : 1 },
]
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

// tạo hàm để render dữ liệu
function renderProducts() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `
            <div class="product-card">
                <img src="/img/banhchung.webp" alt="">
                <h3>${products[i].name}</h3>
                <p class="price">${formatter.format(products[i].price)}</p>
                <button class="btn-add" onclick = addToCart(${i})>Thêm vào giỏ</button>
            </div>
        `;
    }
    document.getElementById("product-list").innerHTML = str;
}

renderProducts();

// tạo hàm hiển thị danh sách sản phẩm giỏi hàng
function renderCart() {
    let str = "";
    for (let i = 0; i < cart.length; i++) {
        str += `<li>
                        <span class="cart-item-name">${cart[i].name}</span>
                        <span>SL: ${cart[i].quantity}</span>
                        <div>
                            <span class="cart-item-price">${formatter.format(cart[i].price)}</span>
                            <button class="btn-remove">X</button>
                        </div>
                    </li>`
        
    }
    document.getElementById("cart-list").innerHTML= str;
}
renderCart();

//
function addToCart(params) {
    console.log("Thông tin sản phẩm", product[index]);
    let newProduct = {...product[index]}
    cart.push(product[index]);
    renderCart();
}