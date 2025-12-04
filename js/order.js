const order = {
    size: "",
    bread: "",
    protein: "",
    cheese: "",
    veggies: [],
    sauces: [],
    seasonings: []
};

document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    // Collect all current selections
    order.size = selectedSize || "";
    order.bread = selectedBread || "";
    order.protein = selectedProtein || "";
    order.cheese = selectedCheese || "";
    order.veggies = selectedVeggies || [];
    order.sauces = selectedSauces || [];
    order.seasonings = selectedSeasonings || [];

    console.log("Order to submit:", order);

    // Send to backend
    fetch("http://localhost:3000/subs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        alert("Order added to cart!");
        console.log(data);

        // ✅ Reset all selections and highlight classes
        selectedSize = "";
        selectedBread = "";
        selectedProtein = "";
        selectedCheese = "";
        selectedVeggies = [];
        selectedSauces = [];
        selectedSeasonings = [];

        // Remove all btn-selected classes
        document.querySelectorAll(".toggle-btn").forEach(btn => btn.classList.remove("btn-selected"));
    })
    .catch(err => console.error(err));
});
