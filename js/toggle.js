let selectedBread = ""; // stores chosen bread

document.querySelectorAll(".bread-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const bread = this.textContent.trim();

        if (selectedBread === bread) {
            // If clicked again, deselect
            this.classList.remove("btn-selected");
            selectedBread = "";
        } else {
            // Remove highlight from all buttons
            document.querySelectorAll(".bread-options .toggle-btn")
                .forEach(b => b.classList.remove("btn-selected"));

            // Highlight the clicked one
            this.classList.add("btn-selected");

            // Save selected bread
            selectedBread = bread;
        }

        console.log("Selected Bread:", selectedBread);
    });
});

let selectedSize = ""; // stores chosen size

document.querySelectorAll(".size-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const size = this.textContent.trim();

        if (selectedSize === size) {
            // Deselect if clicked again
            this.classList.remove("btn-selected");
            selectedSize = "";
        } else {
            // Remove highlight from all size buttons
            document.querySelectorAll(".size-options .toggle-btn")
                .forEach(b => b.classList.remove("btn-selected"));

            // Highlight clicked size
            this.classList.add("btn-selected");

            // Save selected size
            selectedSize = size;
        }

        console.log("Selected Size:", selectedSize);
    });
});

let selectedProtein = ""; // stores chosen protein

document.querySelectorAll(".protein-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const protein = this.textContent.trim();

        if (selectedProtein === protein) {
            // Deselect if clicked again
            this.classList.remove("btn-selected");
            selectedProtein = "";
        } else {
            // Remove highlight from all protein buttons
            document.querySelectorAll(".protein-options .toggle-btn")
                .forEach(p => p.classList.remove("btn-selected"));

            // Highlight clicked protein
            this.classList.add("btn-selected");

            // Save selected protein
            selectedProtein = protein;
        }

        console.log("Selected Protein:", selectedProtein);
    });
});


let selectedCheese = ""; // stores chosen cheese

document.querySelectorAll(".cheese-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const cheese = this.textContent.trim();

        if (selectedCheese === cheese) {
            // Deselect if clicked again
            this.classList.remove("btn-selected");
            selectedCheese = "";
        } else {
            // Remove highlight from all cheese buttons
            document.querySelectorAll(".cheese-options .toggle-btn")
                .forEach(c => c.classList.remove("btn-selected"));

            // Highlight clicked cheese
            this.classList.add("btn-selected");

            // Save selected cheese
            selectedCheese = cheese;
        }

        console.log("Selected Cheese:", selectedCheese);
    });
});

let selectedVeggies = []; // stores selected veggies

document.querySelectorAll(".veggies-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const veggie = this.textContent.trim();

        if (selectedVeggies.includes(veggie)) {
            // If already selected, remove from array and unhighlight
            selectedVeggies = selectedVeggies.filter(v => v !== veggie);
            this.classList.remove("btn-selected");
        } else {
            // Add to array and highlight
            selectedVeggies.push(veggie);
            this.classList.add("btn-selected");
        }

        console.log("Selected Veggies:", selectedVeggies);
    });
});

let selectedSauces = []; // stores selected sauces

document.querySelectorAll(".sauces-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const sauce = this.textContent.trim();

        if (selectedSauces.includes(sauce)) {
            // Deselect if already selected
            selectedSauces = selectedSauces.filter(s => s !== sauce);
            this.classList.remove("btn-selected");
        } else {
            // Select and highlight
            selectedSauces.push(sauce);
            this.classList.add("btn-selected");
        }

        console.log("Selected Sauces:", selectedSauces);
    });
});

let selectedSeasonings = []; // stores selected seasonings

document.querySelectorAll(".seasonings-options .toggle-btn").forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();

        const seasoning = this.textContent.trim();

        if (selectedSeasonings.includes(seasoning)) {
            // Deselect if already selected
            selectedSeasonings = selectedSeasonings.filter(s => s !== seasoning);
            this.classList.remove("btn-selected");
        } else {
            // Select and highlight
            selectedSeasonings.push(seasoning);
            this.classList.add("btn-selected");
        }

        console.log("Selected Seasonings:", selectedSeasonings);
    });
});
