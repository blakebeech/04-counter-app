// We use const for elements that won't be reassigned.
const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

// We use let for count because its value changes over time.
let count = 0;

function updateDisplay() {
	countDisplay.textContent = count;
}

increaseButton.addEventListener("click", function () {
	count = count + 1;
	updateDisplay();
});

decreaseButton.addEventListener("click", function () {
	if (count > 0) {
		count = count - 1;
	}
	updateDisplay();
});

resetButton.addEventListener("click", function () {
	count = 0;
	updateDisplay();
});
