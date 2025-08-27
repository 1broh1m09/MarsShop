const products = [
    {
        img: "./image 10.png",
        name: "Mars rug",
        coinImg: "./Coin 1.png",
        price: "100 Coins",
        available: "24 dona mavjud"
    },
    {
        img: "./image 22.png",
        name: "Keyboard sticker",
        coinImg: "./Coin 1.png",
        price: "49 Coins",
        available: "11 dona mavjud"
    },
    {
        img: "./image 23.png",
        name: "Smart watch",
        coinImg: "./Coin 1.png",
        price: "899 Coins",
        available: "4 dona mavjud"
    },
    {
        img: "./image 24.png",
        name: "Wireless keyboard",
        coinImg: "./Coin 1.png",
        price: "350 Coins",
        available: "0 dona mavjud"
    },
    {
        img: "./image 25.png",
        name: "Mouse",
        coinImg: "./Coin 1.png",
        price: "359 Coins",
        available: "24 dona mavjud"
    },
    {
        img: "./image 26.png",
        name: "AirPods",
        coinImg: "./Coin 1.png",
        price: "499 Coins",
        available: "11 dona mavjud"
    },
    {
        img: "./image 27.png",
        name: "Powerbank",
        coinImg: "./Coin 1.png",
        price: "899 Coins",
        available: "5 dona mavjud"
    },
    {
        img: "./image 28.png",
        name: "USB flash drive",
        coinImg: "./Coin 1.png",
        price: "299 Coins",
        available: "21 dona mavjud"
    },
    {
        img: "./image 29.png",
        name: "Smartphone",
        coinImg: "./Coin 1.png",
        price: "3699 Coins",
        available: "2 dona mavjud"
    },
    {
        img: "./image 30.png",
        name: "Playstation 5",
        coinImg: "./Coin 1.png",
        price: "7449 Coins",
        available: "Ushbu tovarga oldindan buyurtma berish mumkin"
    },
    {
        img: "./image 31.png",
        name: "Yandex Station",
        coinImg: "./Coin 1.png",
        price: "1999 Coins",
        available: "4 dona mavjud"
    },
    {
        img: "./image 32.png",
        name: "Planshet Samsung",
        coinImg: "./Coin 1.png",
        price: "4999 Coins",
        available: "24 dona mavjud"
    }


];

let boxes = document.getElementById("boxes");
let searchInput = document.getElementById("searchput");

function renderProducts(list) {
    boxes.innerHTML = "";
    list.forEach((item) => {
        boxes.innerHTML += `
            <div class="box">
                <img class="item" src="${item.img}" alt="">
                <p class="itemName">${item.name}</p>
                <div class="coinPrice">
                    <img class="coin" src="${item.coinImg}" alt="">
                    <p class="price">${item.price}</p>
                </div>
                <p class="available">${item.available}</p>
            </div>
        `;
    });
}


renderProducts(products);

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(searchText) ||
            item.available.toLowerCase().includes(searchText) ||
            item.price.toLowerCase().includes(searchText);
    });

    renderProducts(filtered);
});
