document.addEventListener('DOMContentLoaded', function() {
    // Данные о товарах (мок-данные)
    const productsData = [
        {
            id: 1,
            name: "Двигатель V8",
            category: "cars",
            description: "Мощный двигатель для легковых автомобилей",
            price: 150000,
            image: "https://avatars.mds.yandex.net/i?id=cdd3d2d9fc508331737afdb65988fbce_l-5220604-images-thumbs&n=13"
        },
        {
            id: 2,
            name: "Двигатель для трактора",
            category: "tractors",
            description: "Надежный двигатель для сельскохозяйственной техники",
            price: 250000,
            image: "https://avatars.mds.yandex.net/i?id=87bc4bde482e45ffbf92c0b09e5990ed_sr-5163701-images-thumbs&n=13"
        },
        {
            id: 3,
            name: "Мотоциклетный двигатель",
            category: "motorcycles",
            description: "Компактный и мощный двигатель для мотоциклов",
            price: 95000,
            image: "https://avatars.mds.yandex.net/i?id=ad4388f6c42a22eb5a9af48c0c5659f6_l-10506067-images-thumbs&n=13"
        },
        {
            id: 4,
            name: "Тормозные колодки",
            category: "cars",
            description: "Высококачественные тормозные колодки",
            price: 2500,
            image: "https://avatars.mds.yandex.net/get-mpic/5222546/img_id8977762501725238346.jpeg/orig"
        },
        {
            id: 5,
            name: "Масляный фильтр",
            category: "cars",
            description: "Фильтр для очистки моторного масла",
            price: 850,
            image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Масляный+фильтр"
        },
        {
            id: 6,
            name: "Свечи зажигания",
            category: "cars",
            description: "Свечи для надежного зажигания",
            price: 1200,
            image: "https://placehold.co/300x200/059669/FFFFFF?text=Свечи+зажигания"
        },
        {
            id: 7,
            name: "Фильтр воздушный",
            category: "cars",
            description: "Фильтр для очистки воздуха",
            price: 1800,
            image: "https://placehold.co/300x200/EF4444/FFFFFF?text=Воздушный+фильтр"
        },
        {
            id: 8,
            name: "Амортизатор передний",
            category: "cars",
            description: "Передний амортизатор для комфортной езды",
            price: 4500,
            image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Амортизатор"
        },
        {
            id: 9,
            name: "Цепь ГРМ",
            category: "cars",
            description: "Высококачественная цепь ГРМ",
            price: 3200,
            image: "https://placehold.co/300x200/059669/FFFFFF?text=Цепь+ГРМ"
        },
        {
            id: 10,
            name: "Шины летние",
            category: "cars",
            description: "Летние шины для всех типов дорог",
            price: 8500,
            image: "https://placehold.co/300x200/1F2937/FFFFFF?text=Летние+шины"
        },
        {
            id: 11,
            name: "Аккумулятор",
            category: "cars",
            description: "Высокомощный автомобильный аккумулятор",
            price: 6800,
            image: "https://placehold.co/300x200/DC2626/FFFFFF?text=Аккумулятор"
        },
        {
            id: 12,
            name: "Масло моторное",
            category: "cars",
            description: "Синтетическое моторное масло",
            price: 1500,
            image: "https://placehold.co/300x200/6B7280/FFFFFF?text=Моторное+масло"
        },
        {
            id: 13,
            name: "Радиатор охлаждения",
            category: "cars",
            description: "Радиатор для эффективного охлаждения",
            price: 5200,
            image: "https://placehold.co/300x200/0EA5E9/FFFFFF?text=Радиатор"
        },
        {
            id: 14,
            name: "Тормозные диски",
            category: "cars",
            description: "Высококачественные тормозные диски",
            price: 3800,
            image: "https://placehold.co/300x200/7C3AED/FFFFFF?text=Тормозные+диски"
        },
        {
            id: 15,
            name: "Помпа",
            category: "cars",
            description: "Насос охлаждающей жидкости",
            price: 2900,
            image: "https://placehold.co/300x200/F59E0B/FFFFFF?text=Помпа"
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

    // Состояние фильтров
    let selectedCategory = 'all';
    let searchQuery = '';

    // Инициализация
    renderProducts(productsData);
    setupEventListeners();

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Клик по кнопке фильтра
        categoryToggle.addEventListener('click', function() {
            categoryMenu.style.display = categoryMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Выбор категории
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function() {
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
});