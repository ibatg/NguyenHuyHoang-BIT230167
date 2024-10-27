document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    // Get form fields
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
  
    // Regular expressions for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phonePattern = /^[0-9]{10,15}$/; 
  
    // Validation flags
    let isValid = true;
    let errorMessage = "";
  
    // Check if fields are empty
    if (!email || !phone || !address || !city || !zip) {
      isValid = false;
      errorMessage = "Please fill out all information fields completely.";
    }
  
    // Check email format
    else if (!emailPattern.test(email)) {
      isValid = false;
      errorMessage = "The Email information field must be entered in the correct Email format.";
    }
  
    // Check phone format
    else if (!phonePattern.test(phone)) {
      isValid = false;
      errorMessage = "The Phone information field must enter the correct phone number format.";
    }
  
    // Display modal box
    showModal(isValid ? "Success!" : errorMessage, isValid ? "success" : "error");
  });
  
  // Function to display a modal box
  function showModal(message, type) {
    // Create modal container
    const modal = document.createElement("div");
    modal.className = "modal";
  
    // Create modal content
    const modalContent = document.createElement("div");
    modalContent.className = `modal-content ${type}`;
    
    // Create message text
    const messageText = document.createElement("p");
    messageText.textContent = message;
  
    // Create close button
    const closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
      modal.remove(); 
    };
  
    // Assemble modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(messageText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }
  