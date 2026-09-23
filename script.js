// Get the calculator display element
const display = document.getElementById("display");


// Add a number or operator to the display
function appendValue(value) {

    // If an error message is currently displayed,
    // clear it before entering a new value
    if (
        display.value === "Invalid" ||
        display.value === "Cannot divide by 0" ||
        display.value === "Enter value"
    ) {
        display.value = "";
    }

    display.value += value;
}


// Clear the calculator display
function clearDisplay() {

    display.value = "";

}


// Delete the last character
function deleteLast() {

    display.value =
        display.value.slice(0, -1);

}


// Calculate the mathematical expression
function calculate() {

    // Check for empty input
    if (display.value === "") {

        display.value = "Enter value";

        return;
    }


    // Prevent division by zero
    if (display.value.includes("/0")) {

        display.value = "Cannot divide by 0";

        return;
    }


    try {

        // Calculate the mathematical expression
        const result =
            Function(
                "return " + display.value
            )();


        // Check whether the result is a valid number
        if (!Number.isFinite(result)) {

            display.value = "Invalid";

            return;
        }


        display.value = result;

    }

    catch (error) {

        // Handle invalid mathematical expressions
        display.value = "Invalid";

    }

}

