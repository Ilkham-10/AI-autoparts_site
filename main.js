document.addEventListener('DOMContentLoaded', function() {
    // Данные о товарах (мок-данные)
    const productsData = [
        {
            id: 1,
            name: "Двигатель V8",
            category: "cars",
            description: "Мощный двигатель для легковых автомобилей. Подходит для моделей BMW, Mercedes, Audi. Гарантия 2 года.",
            price: 150000,
            image: "https://avatars.mds.yandex.net/i?id=fbcdc332f19f17c1f6e94d39a47d459e_l-8411661-images-thumbs&n=13",
            rating: 4.8,
            reviews: 24
        },
        {
            id: 2,
            name: "Двигатель для трактора",
            category: "tractors",
            description: "Надежный двигатель для сельскохозяйственной техники. МТЗ, ЮМЗ, Т-40. Мощность 120 л.с.",
            price: 250000,
            image: "https://st25.stpulscen.ru/images/product/582/023/825_big.jpg",
            rating: 4.9,
            reviews: 18
        },
        {
            id: 3,
            name: "Мотоциклетный двигатель",
            category: "motorcycles",
            description: "Компактный и мощный двигатель для мотоциклов. Honda, Yamaha, Suzuki. Объем 600cc.",
            price: 95000,
            image: "https://ae04.alicdn.com/kf/S71452882ec91484d956672dbf30458deq.jpg",
            rating: 4.7,
            reviews: 32
        },
        {
            id: 4,
            name: "Тормозные колодки",
            category: "cars",
            description: "Высококачественные тормозные колодки для легковых автомобилей. Гарантия 2 года. Подходят для большинства моделей.",
            price: 2500,
            image: "https://avatars.mds.yandex.net/i?id=5762603cc9179609115320002860cef1_l-6888117-images-thumbs&n=13",
            rating: 4.6,
            reviews: 87
        },
        {
            id: 5,
            name: "Масляный фильтр",
            category: "cars",
            description: "Фильтр для очистки моторного масла. Подходит для большинства моделей авто. Рекомендуемый интервал замены - 10 000 км.",
            price: 850,
            image: "https://avatars.mds.yandex.net/i?id=a514b557baa8ca9b2c9f91960b992090_l-5087168-images-thumbs&n=13",
            rating: 4.5,
            reviews: 124
        },
        {
            id: 6,
            name: "Свечи зажигания",
            category: "cars",
            description: "Свечи для надежного зажигания. Совместимы с бензиновыми двигателями. Упаковка - 4 шт.",
            price: 1200,
            image: "https://centr-to.ru/storage/uploads/blog/Articles/soprotivlenie-svechei-zajiganiya/1.jpg",
            rating: 4.7,
            reviews: 93
        },
        {
            id: 7,
            name: "Фильтр воздушный",
            category: "cars",
            description: "Фильтр для очистки воздуха. Повышает эффективность двигателя и снижает расход топлива.",
            price: 1800,
            image: "https://avatars.mds.yandex.net/i?id=27207c9439b14090f04ffd290a0e586c_l-5865989-images-thumbs&n=13",
            rating: 4.4,
            reviews: 67
        },
        {
            id: 8,
            name: "Амортизатор передний",
            category: "cars",
            description: "Передний амортизатор для комфортной езды. Подходит для большинства моделей легковых автомобилей.",
            price: 4500,
            image: "https://avatars.mds.yandex.net/get-mpic/15521812/2a00000198a11ff7b49f6ca793767f46c906/orig",
            rating: 4.8,
            reviews: 41
        },
        {
            id: 9,
            name: "Цепь ГРМ",
            category: "cars",
            description: "Высококачественная цепь ГРМ. Надежная и долговечная. В комплекте все необходимые крепления.",
            price: 3200,
            image: "https://avatars.mds.yandex.net/get-mpic/4937511/img_id6055188366796978386.jpeg/orig",
            rating: 4.6,
            reviews: 58
        },
        {
            id: 10,
            name: "Шины летние",
            category: "cars",
            description: "Летние шины для всех типов дорог. Отличное сцепление и долговечность. Размер 205/55 R16.",
            price: 8500,
            image: "https://ir.ozone.ru/s3/multimedia-1-z/7488930635.jpg",
            rating: 4.9,
            reviews: 156
        },
        {
            id: 11,
            name: "Аккумулятор",
            category: "cars",
            description: "Высокомощный автомобильный аккумулятор. Гарантия 3 года. Емкость 60 Ач, пусковой ток 540А.",
            price: 6800,
            image: "https://www.avtovzglyad.ru/upload/entities/2024/01/27/19/articles/largePicture/07/df/ef/87/3e90a2c17af3b0f6b25ffec2f82f7e72.jpg",
            rating: 4.7,
            reviews: 103
        },
        {
            id: 12,
            name: "Масло моторное",
            category: "cars",
            description: "Синтетическое моторное масло. Защита двигателя в любых условиях. Объем 5л. 5W-30.",
            price: 1500,
            image: "https://avatars.mds.yandex.net/i?id=c86db9561b2e4288e6f4fbf281f3e89f12f53304-5521681-images-thumbs&n=13",
            rating: 4.8,
            reviews: 211
        },
        {
            id: 13,
            name: "Радиатор охлаждения",
            category: "cars",
            description: "Радиатор для эффективного охлаждения двигателя. Алюминиевый корпус. Подходит для большинства моделей.",
            price: 5200,
            image: "https://avatars.mds.yandex.net/get-mpic/15434110/2a000001992d9c6f29065caebb63dfe165df/orig",
            rating: 4.5,
            reviews: 37
        },
        {
            id: 14,
            name: "Тормозные диски",
            category: "cars",
            description: "Высококачественные тормозные диски. Сталь высокой прочности. Комплект на одну ось.",
            price: 3800,
            image: "https://s12.stc.all.kpcdn.net/expert/wp-content/uploads/2022/06/gl-960x540.jpg",
            rating: 4.6,
            reviews: 72
        },
        {
            id: 15,
            name: "Помпа",
            category: "cars",
            description: "Насос охлаждающей жидкости. Надежная работа в любых условиях. В комплекте прокладка и крепеж.",
            price: 2900,
            image: "https://avatars.mds.yandex.net/get-mpic/18257094/2a0000019aca296f9ff765a78bdb07453297/orig",
            rating: 4.4,
            reviews: 49
        },
        {
            id: 16,
            name: "Стартер",
            category: "cars",
            description: "Мощный стартер для легковых автомобилей. Гарантия 1 год. Подходит для двигателей до 2.5л.",
            price: 7800,
            image: "https://avatars.mds.yandex.net/get-mpic/7394206/2a00000199e07c61d75fd3f9775d7bf12967/orig",
            rating: 4.7,
            reviews: 63
        },
        {
            id: 17,
            name: "Генератор",
            category: "cars",
            description: "Генератор переменного тока. Выходное напряжение 14В, сила тока 80А. Для легковых автомобилей.",
            price: 9200,
            image: "https://avatars.mds.yandex.net/i?id=f93a3d963f3d72b790db17f97061d467_l-5885384-images-thumbs&n=13",
            rating: 4.8,
            reviews: 51
        },
        {
            id: 18,
            name: "Коробка передач",
            category: "cars",
            description: "Механическая коробка передач. 5 ступеней. Для легковых автомобилей с двигателями до 2.0л.",
            price: 45000,
            image: "https://img.europodbor.ru/img/d308a7fbda240390a114a9ae32381a41/60335521-2309-2.jpg",
            rating: 4.9,
            reviews: 28
        }
    ];

    // Обработчики для панели профиля
const profileBtn = document.getElementById('profile-btn');
const profileModal = document.getElementById('profile-modal');
const profileOverlay = document.getElementById('profile-overlay');
const closeProfileBtn = document.getElementById('close-profile');
const registrationForm = document.getElementById('registration-form');
const loginSwitch = document.getElementById('login-switch');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// Обработчики событий для панели профиля
profileBtn.addEventListener('click', () => {
    profileModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeProfileBtn.addEventListener('click', () => {
    profileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetFormErrors();
});

profileOverlay.addEventListener('click', () => {
    profileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetFormErrors();
});

loginSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Функционал входа будет реализован позже');
});

// Валидация формы регистрации
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    resetFormErrors();
    
    let isValid = true;
    
    // Валидация имени
    if (firstNameInput.value.trim() === '') {
        showError(firstNameInput, 'Имя обязательно для заполнения');
        isValid = false;
    } else if (firstNameInput.value.length < 2) {
        showError(firstNameInput, 'Имя должно содержать минимум 2 символа');
        isValid = false;
    }
    
    // Валидация фамилии
    if (lastNameInput.value.trim() === '') {
        showError(lastNameInput, 'Фамилия обязательна для заполнения');
        isValid = false;
    } else if (lastNameInput.value.length < 2) {
        showError(lastNameInput, 'Фамилия должна содержать минимум 2 символа');
        isValid = false;
    }
    
    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Введите корректный email');
 isValid = false;
    }
    
    // Валидация телефона
    const phoneRegex = /^(\+7|8|7)[0-9]{10}$/;
    if (!phoneRegex.test(phoneInput.value.replace(/\D/g, ''))) {
        showError(phoneInput, 'Введите корректный номер телефона');
        isValid = false;
    }
    
    if (isValid) {
        // Сохраняем данные в localStorage
        const userData = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            registeredAt: new Date().toISOString()
        };
        
        localStorage.setItem('userProfile', JSON.stringify(userData));
        
        // Показываем успешное сообщение
        showSuccessMessage();
        
        // Сбрасываем форму
        registrationForm.reset();
        setTimeout(() => {
            profileModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 1500);
    }
});

// Функции для работы с формой
function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('input-error');
}

function resetFormErrors() {
    const inputs = [firstNameInput, lastNameInput, emailInput, phoneInput];
    inputs.forEach(input => {
        input.classList.remove('input-error');
        const errorElement = document.getElementById(`${input.id}-error`);
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    });
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'registration-success';
    successMessage.innerHTML = `
        <div class="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
        <h3>Регистрация успешна!</h3>
        <p>Добро пожаловать, ${firstNameInput.value}!</p>
    `;
    
    profileModalContent.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 2000);
}

// Валидация в реальном времени
firstNameInput.addEventListener('input', () => {
    if (firstNameInput.value.trim().length >= 2) {
        firstNameInput.classList.remove('input-error');
        document.getElementById('first-name-error').style.display = 'none';
    }
});

lastNameInput.addEventListener('input', () => {
    if (lastNameInput.value.trim().length >= 2) {
        lastNameInput.classList.remove('input-error');
        document.getElementById('last-name-error').style.display = 'none';
    }
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('input-error');
        document.getElementById('email-error').style.display = 'none';
    }
});

phoneInput.addEventListener('input', () => {
    const phoneRegex = /^(\+7|8|7)[0-9]{10}$/;
    if (phoneRegex.test(phoneInput.value.replace(/\D/g, ''))) {
        phoneInput.classList.remove('input-error');
        document.getElementById('phone-error').style.display = 'none';
    }
});


 // Функции для работы с корзиной
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }
    
    saveCart(cart);
    updateCartDisplay();
    
    // Эффект добавления в корзину
    document.querySelector('.cart-button').classList.add('cart-shake');
    setTimeout(() => {
        document.querySelector('.cart-button').classList.remove('cart-shake');
    }, 500);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartDisplay();
}

function updateCartItemQuantity(productId, action) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (action === 'decrease') {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                removeFromCart(productId);
                return;
            }
        } else if (action === 'increase') {
            item.quantity += 1;
        }
        
        saveCart(cart);
        updateCartDisplay();
    }
}

function clearCart() {
    localStorage.removeItem('cart');
}

function updateCartDisplay() {
    const cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Обновляем счетчик в кнопке корзины
    document.querySelector('.cart-count').textContent = cartCount;
    document.querySelector('.cart-total').textContent = formatPrice(cartTotal);
    
    // Обновляем отображение в модальном окне корзины
    if (document.getElementById('cart-items-container')) {
        if (cart.length === 0) {
            document.getElementById('cart-items-container').innerHTML = `
                <div class="empty-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M12 13a4 4 0 00-4 4v2a4 4 0 008 0v-2a4 4 0 00-4-4z"></path>
                    </svg>
                    <p>Ваша корзина пуста</p>
                    <button class="continue-shopping">Продолжить покупки</button>
                </div>
            `;
            
            // Добавляем обработчик для кнопки "Продолжить покупки"
            document.querySelector('.continue-shopping').addEventListener('click', () => {
                document.getElementById('cart-modal').classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        } else {
            let cartHTML = '';
            cart.forEach(item => {
                const categoryText = getCategoryText(item.category);
                cartHTML += `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${formatPrice(item.price)}</div>
                            <div class="cart-item-category">${categoryText}</div>
                            <div class="cart-item-controls">
                                <div class="quantity-control">
                                    <button class="quantity-btn" data-action="decrease">-</button>
                                    <span class="quantity-display">${item.quantity}</span>
                                    <button class="quantity-btn" data-action="increase">+</button>
                                </div>
                                <button class="remove-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            document.getElementById('cart-items-container').innerHTML = cartHTML;
        }
        
        // Обновляем итоги
        document.getElementById('cart-total-amount').textContent = formatPrice(cartTotal);
        document.getElementById('cart-items-count').textContent = `${cartCount} товаров`;
        document.getElementById('checkout-total').textContent = formatPrice(cartTotal);
        
        // Активируем/деактивируем кнопку оформления заказа
        if (document.getElementById('checkout-btn')) {
            document.getElementById('checkout-btn').disabled = cartCount === 0;
        }
    }
}

// Форматирование цены
function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

// Получение текста категории
function getCategoryText(category) {
    const categories = {
        'all': 'Все типы',
        'cars': 'Для легковых',
        'motorcycles': 'Для мотоциклов',
        'tractors': 'Для тракторов'
    };
    return categories[category] || 'Другое';
}

// Настройка обработчиков событий для корзины
function setupCartEventListeners() {
    // Открытие/закрытие корзины
    document.getElementById('cart-btn').addEventListener('click', () => {
        document.getElementById('cart-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
        updateCartDisplay();
    });
    
    document.getElementById('close-cart').addEventListener('click', () => {
        document.getElementById('cart-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('cart-overlay').addEventListener('click', () => {
        document.getElementById('cart-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Оформление заказа
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (getCart().length > 0) {
            alert('Заказ успешно оформлен! Спасибо за покупку.');
            clearCart();
            updateCartDisplay();
            document.getElementById('cart-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Управление количеством товара в корзине
    document.getElementById('cart-items-container').addEventListener('click', function(e) {
        if (e.target.closest('.quantity-btn')) {
            const btn = e.target.closest('.quantity-btn');
            const cartItem = btn.closest('.cart-item');
            const productId = parseInt(cartItem.dataset.id);
            const action = btn.dataset.action;
            
            updateCartItemQuantity(productId, action);
        }
        
        if (e.target.closest('.remove-item')) {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.dataset.id);
            
            removeFromCart(productId);
        }
    });
    
    // Добавление товара в корзину из карточек
    document.addEventListener('click', function(e) {
        if (e.target.closest('.buy-btn')) {
            const productCard = e.target.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            
            // Находим товар в данных
            const product = productsData.find(p => p.id === productId);
            if (product) {
                addToCart(product);
                showNotification(`Товар "${product.name}" добавлен в корзину!`);
            }
        }
    });
}

// Показ уведомления
function showNotification(message) {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    // Добавляем в DOM
    document.body.appendChild(notification);
    
    // Показываем
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Удаляем через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
    
    // Добавляем стили для уведомления
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            background: white;
            color: #212529;
            padding: 16px 28px;
            border-radius: 50px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            font-weight: 600;
            font-size: 1.05rem;
        }
        
        .notification-content svg {
            color: #4CAF50;
            width: 22px;
            height: 22px;
            flex-shrink: 0;
        }
    `;
    document.head.appendChild(style);
}

// Инициализация корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupCartEventListeners();
    updateCartDisplay();
});


    // Элементы DOM
    const searchInput = document.getElementById('search-input');
    const categoryToggle = document.getElementById('category-toggle');
    const categoryMenu = document.getElementById('category-menu');
    const searchBtn = document.getElementById('search-btn');
    const productsGrid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const resultsTitle = document.getElementById('results-title');
    const resultsCount = document.getElementById('results-count');
    const resetFiltersBtn = document.getElementById('reset-filters');

    // Состояние фильтров
    let selectedCategory = 'all';
    let searchQuery = '';

    // Инициализация
    renderProducts(productsData);
    setupEventListeners();

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Клик по кнопке фильтра
        categoryToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            categoryMenu.style.display = categoryMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Выбор категории
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function() {
                // Убираем активный класс у всех элементов
                document.querySelectorAll('.dropdown-item').forEach(el => {
                    el.classList.remove('active');
                });
                
                // Добавляем активный класс к выбранному
                this.classList.add('active');
                
                selectedCategory = this.dataset.value;
                categoryToggle.innerHTML = `
                    ${this.textContent}
                    <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                `;
                categoryMenu.style.display = 'none';
                applyFilters();
            });
        });

        // Клик по кнопке поиска
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value.trim();
            applyFilters();
        });

        // Поиск при нажатии Enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = searchInput.value.trim();
                applyFilters();
            }
        });

        // Сброс фильтров
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', function() {
                searchInput.value = '';
                searchQuery = '';
                
                // Сбрасываем категорию на "Все типы"
                document.querySelectorAll('.dropdown-item').forEach(el => {
                    el.classList.remove('active');
                });
                document.querySelector('.dropdown-item[data-value="all"]').classList.add('active');
                selectedCategory = 'all';
                categoryToggle.innerHTML = `
                    Все типы
                    <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                `;
                
                // Показываем все товары
                renderProducts(productsData);
                updateResultsHeader('', 'all', productsData.length);
            });
        }

        // Закрытие меню при клике вне его
        document.addEventListener('click', function(e) {
            if (!categoryToggle.contains(e.target) && !categoryMenu.contains(e.target)) {
                categoryMenu.style.display = 'none';
            }
        });

        // Добавление обработчиков для кнопок "Купить" (будут добавлены динамически)
        productsGrid.addEventListener('click', function(e) {
            if (e.target.classList.contains('buy-btn')) {
                const productCard = e.target.closest('.product-card');
                const productName = productCard.querySelector('.product-title').textContent;
                showNotification(`Товар "${productName}" добавлен в корзину!`);
                
                // Эффект добавления в корзину
                const cartBtn = document.querySelector('.cart-button');
                if (cartBtn) {
                    cartBtn.classList.add('cart-shake');
                    setTimeout(() => {
                        cartBtn.classList.remove('cart-shake');
                    }, 500);
                }
            }
        });
    }

    // Применение фильтров
    function applyFilters() {
        let filteredProducts = [...productsData];
        
        // Фильтрация по категории
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }
        
        // Фильтрация по поисковому запросу
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)
            );
        }
        
        // Обновление заголовка и количества результатов
        updateResultsHeader(searchQuery, selectedCategory, filteredProducts.length);
        
        // Отображение результатов
        renderProducts(filteredProducts);
    }

    // Обновление заголовка результатов
    function updateResultsHeader(query, category, count) {
        let title = '';
        
        if (query && category === 'all') {
            title = `Результаты поиска: "${query}"`;
        } else if (query && category !== 'all') {
            const categoryText = document.querySelector(`.dropdown-item[data-value="${category}"]`).textContent;
            title = `Результаты поиска: "${query}" (${categoryText})`;
        } else if (!query && category !== 'all') {
            const categoryText = document.querySelector(`.dropdown-item[data-value="${category}"]`).textContent;
            title = `${categoryText}`;
        } else {
            title = 'Все автозапчасти';
        }
        
        resultsTitle.textContent = title;
        resultsCount.textContent = `${count} товаров`;
    }

    // Отрисовка товаров
    function renderProducts(products) {
        productsGrid.innerHTML = '';
        
        if (products.length === 0) {
            noResults.style.display = 'block';
            return;
        }
        
        noResults.style.display = 'none';
        
        // Сортируем товары по рейтингу (лучшие первыми)
        products.sort((a, b) => b.rating - a.rating);
        
        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.animationDelay = `${index * 0.05}s`;
            
            const categoryText = getCategoryText(product.category);
            const categoryClass = getCategoryClass(product.category);
            
            // Генерируем звезды рейтинга
            const stars = generateStars(product.rating);
            
            productCard.innerHTML = `
                <div class="product-badge ${categoryClass}">${categoryText}</div>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-overlay">
                        <button class="quick-view-btn">Быстрый просмотр</button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-header">
                        <h4 class="product-title">${product.name}</h4>
                        <div class="product-rating">
                            ${stars}
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                    </div>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <button class="buy-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            В корзину
                        </button>
                    </div>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
    }

    // Получение текста категории
    function getCategoryText(category) {
        const categories = {
            'all': 'Все типы',
            'cars': 'Для легковых',
            'motorcycles': 'Для мотоциклов',
            'tractors': 'Для тракторов'
        };
        return categories[category] || 'Другое';
    }

    // Получение CSS класса для категории
    function getCategoryClass(category) {
        const classes = {
            'cars': 'badge-blue',
            'motorcycles': 'badge-orange',
            'tractors': 'badge-green'
        };
        return classes[category] || 'badge-gray';
    }

    // Генерация звезд рейтинга
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let starsHTML = '';
        
        // Полные звезды
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<svg class="star full" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
        }
        
        // Половинная звезда
        if (hasHalfStar) {
            starsHTML += '<svg class="star half" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
        }
        
        // Пустые звезды
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<svg class="star empty" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
        }
        
        return starsHTML;
    }

    // Форматирование цены
    function formatPrice(price) {
        return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
    }

    // Показ уведомления
    function showNotification(message) {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        // Добавляем в DOM
        document.body.appendChild(notification);
        
        // Показываем
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Удаляем через 3 секунды
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
});