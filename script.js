const products = [
    {name: "Ноутбук", price: 75000, category: "Техника"},
    {name: "Мышь", price: 1500, category: "Аксессуары"},
    {name: "Клавиатура", price: 3500, category: "Аксессуары"},
    {name: "Монитор", price: 22000, category: "Техника"},
    {name: "Наушники", price: 5000, category: "Аксессуары"},
]

console.log("-----ПЕРВОЕ ЗАДАНИЕ-----");
products.forEach(function(product) {
    console.log(`Название продукта - ${product[`name`]}, его стоимость - ${product[`price`]}`);
});

console.log("-----ВТОРОЕ ЗАДАНИЕ-----");
products.filter(function(product) {
    if (product[`price`] < 5000) {
        console.log(`Товар дешевле 5000 рублей - ${product['name']}, его цена - ${product[`price`]}`);
    }
});

console.log("-----ТРЕТЬЕ ЗАДАНИЕ-----");
const newProducts = products.map(function(product) {
    return product.name;
});

console.log(newProducts);

console.log("-----ЧЕТВЕРТОЕ ЗАДАНИЕ-----");
const firstCategory = products.find(function(product) {
    if (product[`category`] === "Техника") {
        return product;
    }
});

console.log(firstCategory);

console.log("-----ПЯТОЕ ЗАДАНИЕ-----");
const discountProducts = products.map(function(product) {
    const discount = 10;
    const procentDiscount = discount/100;

    const discountPrice = product[`price`] * procentDiscount;
    const TotalPrice = product[`price`] - discountPrice;
    
    product[`price`] = TotalPrice
    return product;
});

console.log(discountProducts);