const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Canh Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];

const productList = document.getElementById("product-list");
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");

function renderProduct(product) {
    const li = document.createElement("li");
    li.classList.add("product-item");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "Giá: " + Number(product.price).toLocaleString("vi-VN") + " VND";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Xóa";

    infoDiv.appendChild(name);
    infoDiv.appendChild(price);

    productDiv.appendChild(infoDiv);
    productDiv.appendChild(deleteBtn);

    li.appendChild(productDiv);
    productList.appendChild(li);
}

products.forEach(renderProduct);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = priceInput.value;

    if (name === "" || price === "") return;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: Number(price)
    };

    products.push(newProduct);
    renderProduct(newProduct);

    nameInput.value = "";
    priceInput.value = "";
});

productList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (confirmDelete) {
            const li = e.target.closest(".product-item");
            li.remove();
        }
    }
});