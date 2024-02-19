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

document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  var form = document.getElementById('contactForm');

  // Add submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Create a new FormData object
    var formData = new FormData(this);

    // Send the form data using fetch API
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      // Check if response is OK
      if (response.ok) {
        // Show success message
        document.getElementById('response-message').innerHTML = '<p class="text-green-500">Message sent successfully!</p>';
        // Optionally, clear form fields
        form.reset();
      } else {
        // Show error message
        document.getElementById('response-message').innerHTML = '<p class="text-red-500">Error: Message could not be sent.</p>';
      }
    })
    .catch(function(error) {
      // Show error message
      document.getElementById('response-message').innerHTML = '<p class="text-red-500">Error: ' + error.message + '</p>';
    });
  });
});



