// Get DOM elements
const animateButton = document.getElementById("animateButton");
const box = document.getElementById("box");

// Check if there's a saved preference in localStorage for animation
if (localStorage.getItem("animationDone") === "true") {
    box.classList.add("animate"); // Automatically add animation if previously triggered
}

// Store user preference in localStorage
function storePreference() {
    localStorage.setItem("animationDone", "true");
}

// Trigger the animation when the button is clicked
animateButton.addEventListener("click", () => {
    box.classList.toggle("animate"); // Toggle animation
    storePreference(); // Store the preference to remember user action
});
