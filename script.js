// Функция для входа пользователя
function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username); // Сохраняем имя пользователя
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('site-container').style.display = 'block';
        showAllProducts();
    }
}

// Функция для выхода пользователя
function logout() {
    localStorage.removeItem('username');
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('site-container').style.display = 'none';
}

// Функция для отображения всех товаров
function showAllProducts() {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => product.style.display = 'block'); // Показываем все товары
}

// Функция для фильтрации товаров по категориям
function applyFilter() {
    const filter = document.getElementById('filter').value;
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (filter === 'all' || product.classList.contains(filter)) {
            product.style.display = 'block'; // Показать товары нужной категории
        } else {
            product.style.display = 'none'; // Скрыть остальные
        }
    });
}

// Проверка, вошел ли пользователь при загрузке страницы
function checkLogin() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('site-container').style.display = 'block';
        showAllProducts();
    }
}

window.onload = function() {
    checkLogin();
};
