let products = [
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
const searchInput = document.getElementById("search-input");
const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");

function renderProducts(list) {
    productList.innerHTML = "";

    list.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("product-item");

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const name = document.createElement("h3");
        name.classList.add("product-name");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.classList.add("price");
        price.textContent = "Giá: " + Number(product.price).toLocaleString("vi-VN") + " VND";

        infoDiv.appendChild(name);
        infoDiv.appendChild(price);

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-price-btn");
        editBtn.textContent = "Sửa giá";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Xóa";

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        productDiv.appendChild(infoDiv);
        productDiv.appendChild(actionsDiv);

        li.appendChild(productDiv);
        productList.appendChild(li);
    });
}

renderProducts(products);

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
    renderProducts(products);

    nameInput.value = "";
    priceInput.value = "";
});

productList.addEventListener("click", function(e) {
    const li = e.target.closest(".product-item");
    const index = Array.from(productList.children).indexOf(li);

    if (e.target.classList.contains("delete-btn")) {
        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (confirmDelete) {
            products.splice(index, 1);
            renderProducts(products);
        }
    }

    if (e.target.classList.contains("edit-price-btn")) {
        const newPrice = prompt("Nhập giá mới (VND):");
        if (newPrice !== null && newPrice.trim() !== "" && !isNaN(newPrice)) {
            products[index].price = Number(newPrice);
            renderProducts(products);
        }
    }
});

searchInput.addEventListener("input", function() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );
    renderProducts(filtered);
});

sortAscBtn.addEventListener("click", function() {
    products.sort((a, b) => a.price - b.price);
    renderProducts(products);
});

sortDescBtn.addEventListener("click", function() {
    products.sort((a, b) => b.price - a.price);
    renderProducts(products);
});