const menuItems = [
    {
        name: "Italian Pasta",
        image: "food/pasta.png",
        ingredients: "Cream, Cheese, Doe, Boiling",
        price: 299,
        rating: "4.5 ★",
        category: "Veg"
    },
    {
        name: "Grilled Chicken",
        image: "food/pasta.png",
        ingredients: "Chicken, Spices, Lemon",
        price: 450,
        rating: "4.7 ★",
        category: "Non-Veg"
    },
    {
        name: "Veggie Salad",
        image: "food/pasta.png",
        ingredients: "Lettuce, Tomato, Cucumber",
        price: 150,
        rating: "4.3 ★",
        category: "Veg"
    },
    {
        name: "Fried Rice",
        image: "food/pasta.png",
        ingredients: "Rice, Soy Sauce, Vegetables",
        price: 200,
        rating: "4.6 ★",
        category: "Veg"
    },
    {
        name: "Cold Coffee",
        image: "food/pasta.png",
        ingredients: "Coffee, Milk, Ice",
        price: 120,
        rating: "4.8 ★",
        category: "Drinks"
    }
];

// Function to filter and display menu items
function filterMenu() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const searchFilter = document.getElementById("searchFilter").value.toLowerCase();

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = categoryFilter === "" || item.category === categoryFilter;
        const matchesSearch = item.name.toLowerCase().includes(searchFilter);
        return matchesCategory && matchesSearch;
    });

    loadMenuItems(filteredItems);
}

// Function to generate menu cards
function loadMenuItems(items) {
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = ""; // Clear existing content

    if (items.length === 0) {
        cardsContainer.innerHTML = `<p>No items found</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="details">
                <h2>${item.name}</h2>
                <div class="ing">
                    <p style="font-size: 13px; color: #968383;">${item.ingredients}</p>
                </div>
                <div class="price">
                    <div class="col1">
                        <p>₹ ${item.price}</p>
                    </div>
                    <div class="col2">
                        <p>${item.rating}</p>
                    </div>
                </div>
            </div>
        `;

        // Add click event to save details and redirect
        card.addEventListener("click", () => {
            localStorage.setItem("selectedDish", JSON.stringify(item));
            window.location.href = "about.html";
        });

        cardsContainer.appendChild(card);
    });
}

// Event listeners for filters
document.getElementById("categoryFilter").addEventListener("change", filterMenu);
document.getElementById("searchFilter").addEventListener("input", filterMenu);

// Load all menu items on page load
loadMenuItems(menuItems);
