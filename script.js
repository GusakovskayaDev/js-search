
const products = [
	{ id: 1, name: 'Яблоко' },
	{ id: 2, name: 'Банан' },
	{ id: 3, name: 'Апельсин' },
	{ id: 4, name: 'Киви' },
	{ id: 5, name: 'Груша' },
	{ id: 6, name: 'Арбуз' },
	{ id: 7, name: 'Персик' },
	{ id: 8, name: 'Вишня' },
	{ id: 9, name: 'Манго' },
	{ id: 10, name: 'Лимон' },
	{ id: 11, name: 'Черника' },
	{ id: 12, name: 'Малина' },
	{ id: 13, name: 'Клубника' },
	{ id: 14, name: 'Абрикос' },
	{ id: 15, name: 'Гранат' },
	{ id: 16, name: 'Слива' },
	{ id: 17, name: 'Инжир' },
	{ id: 18, name: 'Дыня' },
	{ id: 19, name: 'Кокос' },
	{ id: 20, name: 'Гуава' }
];


let timeoutId;

// Функция для подсветки совпадений
function highlightText(text, query) {
	if (!query) return text;

	const regex = new RegExp(`(${query})`, 'gi');
	return text.replace(regex, '<span class="highlight">$1</span>');
}

// Функция отображения списка товаров с подсветкой
function displayProducts(filteredProducts, query = '') {
	const productList = document.getElementById('product-list');
	productList.innerHTML = '';

	filteredProducts.forEach(product => {
			const li = document.createElement('li');
			li.innerHTML = highlightText(product.name, query); 
			productList.appendChild(li);
	});
}

// Обработчик ввода для поля поиска
document.getElementById('search').addEventListener('input', function () {
	const query = this.value;

	clearTimeout(timeoutId);

	timeoutId = setTimeout(() => {
			const filteredProducts = products.filter(product => 
					product.name.toLowerCase().startsWith(query.toLowerCase())
			);

			displayProducts(filteredProducts, query);
	}, 300);
});

displayProducts(products);
