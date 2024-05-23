document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".pillBtn");
    
    buttons.forEach(button => {
      button.addEventListener("click", function(event) {
        const emailInput = this.parentElement.querySelector(".form-control[type='email'], .form-control[type='text']");
        
        // Email validation regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // Check if the email is valid
        if (!emailPattern.test(emailInput.value)) {
          event.preventDefault();
          
          alert("Please enter a valid email address.");
        } else {
          alert("Email has successfullly been sent!");
        }
      });
    });
  });
  