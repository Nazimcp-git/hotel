// Retrieve the selected dish details from localStorage
const selectedDish = JSON.parse(localStorage.getItem("selectedDish"));

// Display the dish details if available
if (selectedDish) {
    document.querySelector(".col1 img").src = selectedDish.image;
    document.querySelector(".col2 h2").textContent = selectedDish.name;
    document.querySelector(".col2 .about p").textContent = selectedDish.ingredients;
    document.querySelector(".col2 h3").textContent = `Price: ₹ ${selectedDish.price}`;
} else {
    // Handle the case where no data is available
    document.body.innerHTML = "<p>Dish details not available.</p>";
}
