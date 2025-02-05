// Select the container element where color boxes will be appended
const containerEl = document.querySelector(".container");

// Loop to create 30 color boxes dynamically
for (let index = 0; index < 30; index++) {
  // Create a new div element for each color box
  const colorContainerEl = document.createElement("div");
  
  // Add the class "color-container" to style the new div element
  colorContainerEl.classList.add("color-container");
  
  // Append the new color box to the container
  containerEl.appendChild(colorContainerEl);
}

// Select all elements with the class "color-container"
const colorContainerEls = document.querySelectorAll(".color-container");

// Call the function to generate random colors for the color boxes
generateColors();

// Function to generate and apply random colors to the color boxes
function generateColors() {
  // Loop through all color container elements
  colorContainerEls.forEach((colorContainerEl) => {
    // Generate a random color code
    const newColorCode = randomColor();
    
    // Apply the generated color as the background color of the color box
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    
    // Set the text inside the color box to display the color code
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

// Function to generate a random hex color code
function randomColor() {
  // Define the characters that can be used in the color code
  const chars = "0123456789abcdef";
  
  // The length of the hex color code (6 characters)
  const colorCodeLength = 6;
  
  // Initialize an empty string for the color code
  let colorCode = "";
  
  // Loop to generate 6 random characters for the color code
  for (let index = 0; index < colorCodeLength; index++) {
    // Generate a random number to select a character from the available characters
    const randomNum = Math.floor(Math.random() * chars.length);
    
    // Add the selected character to the color code string
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  
  // Return the generated color code
  return colorCode;
}
