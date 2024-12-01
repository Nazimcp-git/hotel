// Retrieve the selected dish details from localStorage
const selectedDish = JSON.parse(localStorage.getItem("selectedDish"));

// Display the dish details if available
if (selectedDish) {
    document.querySelector(".col1 #dishImage1").src = selectedDish.image;
    document.querySelector(".col1 #dishImage2").src = selectedDish.imagee;
    document.querySelector(".col1 #dishImage3").src = selectedDish.imageee;
    document.querySelector(".col1 #dishImage4").src = selectedDish.imageeee;
    
    document.querySelector(".col2 h2").textContent = selectedDish.name;
    document.querySelector(".col2 .about p").textContent = selectedDish.ingredients;
    document.querySelector(".col2 h3").textContent = `Price: ₹ ${selectedDish.price}`;
} else {
    // Handle the case where no data is available
    document.body.innerHTML = "<p>Dish details not available.</p>";
}
