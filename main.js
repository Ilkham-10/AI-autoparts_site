    Document.addEventListener('DOMContentLoaded', function() {
    // Данные о товарах (мок-данные)
    const productsData = [
        {
            id: 1,
            name: "Двигатель V8",
            category: "cars",
            description: "Мощный двигатель для легковых автомобилей. Подходит для моделей BMW, Mercedes, Audi.",
            price: 150000,
            image: "https://images.unsplash.com/photo-1598301251856-2397e5f319f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Двигатель для трактора",
            category: "tractors",
            description: "Надежный двигатель для сельскохозяйственной техники. МТЗ, ЮМЗ, Т-40.",
            price: 250000,
            image: "https://images.unsplash.com/photo-1605733513597-0e43e6c4a195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "Мотоциклетный двигатель",
            category: "motorcycles",
            description: "Компактный и мощный двигатель для мотоциклов. Honda, Yamaha, Suzuki.",
            price: 95000,
            image: "https://images.unsplash.com/photo-1558980052-74f9c5cc5b79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            name: "Тормозные колодки",
            category: "cars",
            description: "Высококачественные тормозные колодки для легковых автомобилей. Гарантия 2 года.",
            price: 2500,
            image: "https://images.unsplash.com/photo-1598301251856-2397e5f319f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            name: "Масляный фильтр",
            category: "cars",
            description: "Фильтр для очистки моторного масла. Подходит для большинства моделей авто.",
            price: 850,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            name: "Свечи зажигания",
            category: "cars",
            description: "Свечи для надежного зажигания. Совместимы с бензиновыми двигателями.",
            price: 1200,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            name: "Фильтр воздушный",
            category: "cars",
            description: "Фильтр для очистки воздуха. Повышает эффективность двигателя.",
            price: 1800,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            name: "Амортизатор передний",
            category: "cars",
            description: "Передний амортизатор для комфортной езды. Подходит для большинства моделей.",
            price: 4500,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9,
            name: "Цепь ГРМ",
            category: "cars",
            description: "Высококачественная цепь ГРМ. Надежная и долговечная.",
            price: 3200,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 10,
            name: "Шины летние",
            category: "cars",
            description: "Летние шины для всех типов дорог. Отличное сцепление и долговечность.",
            price: 8500,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 11,
            name: "Аккумулятор",
            category: "cars",
            description: "Высокомощный автомобильный аккумулятор. Гарантия 3 года.",
            price: 6800,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 12,
            name: "Масло моторное",
            category: "cars",
            description: "Синтетическое моторное масло. Защита двигателя в любых условиях.",
            price: 1500,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 13,
            name: "Радиатор охлаждения",
            category: "cars",
            description: "Радиатор для эффективного охлаждения двигателя. Алюминиевый корпус.",
            price: 5200,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 14,
            name: "Тормозные диски",
            category: "cars",
            description: "Высококачественные тормозные диски. Сталь высокой прочности.",
            price: 3800,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 15,
            name: "Помпа",
            category: "cars",
            description: "Насос охлаждающей жидкости. Надежная работа в любых условиях.",
            price: 2900,
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        }
    ];

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
    initScrollAnimations();

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Клик по кнопке фильтра
        categoryToggle.addEventListener('click', function() {
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
                categoryToggle.textContent = this.textContent;
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
                categoryToggle.textContent = 'Все типы';
                
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
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const categoryText = getCategoryText(product.category);
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-category">${categoryText}</div>
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <button class="buy-btn">Купить</button>
                </div>
            `;
            
            // Добавляем обработчик для кнопки "Купить"
            productCard.querySelector('.buy-btn').addEventListener('click', function() {
                showNotification(`Товар "${product.name}" добавлен в корзину!`);
            });
            
            productsGrid.appendChild(productCard);
        });
    }

    // Получение текста категории
    function getCategoryText(category) {
        const categories = {
            'all': 'Все типы',
            'cars': 'Машины',
            'motorcycles': 'Мотоциклы',
            'tractors': 'Тракторы'
        };
        return categories[category] || 'Другое';
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

    // Инициализация анимаций при прокрутке
    function initScrollAnimations() {
        // Анимация для карточек описания
        const descriptionCards = document.querySelectorAll('.description-card');
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        descriptionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Анимация для карточек товаров
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.6s ease, transform 0.6s ease ${0.2 + index * 0.05}s`;
        });
        
        const productObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    productObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05
        });
        
        productCards.forEach(card => {
            productObserver.observe(card);
        });
        
        // Анимация для отзывов
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateX(30px)';
            card.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
        });
        
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        testimonialCards.forEach(card => {
            testimonialObserver.observe(card);
        });
    }
});