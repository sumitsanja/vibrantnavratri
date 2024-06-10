document.getElementById("ticketForm").addEventListener("submit", function() {
    // event.preventDefault(); // Prevent form from submitting
    
    let emailInput = document.getElementById("email");
    let errorMessage = document.getElementById("error-message");
    let email = emailInput.value;
    
    if (!email.includes("@")) {
        errorMessage.textContent = "The '@' symbol is missing in your email address.";
        return;
    } else {
        errorMessage.textContent = "";
    }

    // const ticketInput = document.getElementById("tickets");
    // const amountInput = document.getElementById("amount");
    // const ticketCount = ticketInput.value;
    // const ticketPrice = 300; // Example price per ticket
    
    // const totalAmount = ticketCount * ticketPrice;
    // amountInput.value = `${totalAmount}`;
   
    alert("Form submitted successfully.");
        
    // Here you can add code to actually submit the form, e.g., send data to a server
});

// Update total amount whenever the number of tickets changes
document.getElementById("tickets").addEventListener("input", function() {
    let ticketInput = document.getElementById("tickets");
    let amountInput = document.getElementById("amount");
    let ticketCount = ticketInput.value;
    let ticketPrice = 300; // Example price per ticket
    
    let totalAmount = ticketCount * ticketPrice;
    amountInput.value = `${totalAmount}`+ `Rs`;
});
