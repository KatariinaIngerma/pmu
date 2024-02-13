// Mobile menu script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the menu toggle button and the menu overlay
    const menuToggle = document.getElementById("menu-toggle");
    const menuOverlay = document.getElementById("menu-overlay");
  
    // Toggle menu visibility on menu button click
    menuToggle.addEventListener("click", () => {
      // Toggle the "hidden" class to show/hide the menu overlay
      menuOverlay.classList.toggle("hidden");
    });
  
    // Close the menu when clicking outside of it or pressing the 'X' button
    document.addEventListener("click", function (event) {
      // Check if the click is outside the menu toggle button and menu overlay
      if (
        !menuToggle.contains(event.target) &&
        !menuOverlay.contains(event.target)
      ) {
        // If outside, add the "hidden" class to hide the menu overlay
        menuOverlay.classList.add("hidden");
      }
    });
  
    // Prevent clicks inside the menu from closing it
    menuOverlay.addEventListener("click", function (event) {
      // Stop the click event propagation within the menu overlay
      menuOverlay.classList.add("hidden");
      event.stopPropagation();
    });
  });
  