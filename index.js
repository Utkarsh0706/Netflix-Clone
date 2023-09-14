 // Get references to the select element and the label to display the selected language
 const languageSelect = document.getElementById("languageSelect");
 const selectedLanguage = document.getElementById("selectedLanguage");

 // Add an event listener to the select element
 languageSelect.addEventListener("change", function () {
     // Update the label to display the selected language
     selectedLanguage.textContent = languageSelect.options[languageSelect.selectedIndex].text;
 });

 const emailForm = document.getElementById("emailForm");
 const emailInput = document.getElementById("email");
 const emailError = document.getElementById("emailError");

 emailForm.addEventListener("submit", function (e) {
     e.preventDefault(); // Prevent the form from submitting by default

     const email = emailInput.value;

     // Regular expression to validate email format
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

     if (emailRegex.test(email)) {
         // Valid email address
         emailError.textContent = "";
         
     } else {
         // Invalid email address
         emailError.textContent = "Please enter a valid email address.";
     }
 });

 let openAccordion = null; 
 function toggleAccordion(accordion) {
     const content = accordion.nextElementSibling;
     const icon = accordion.querySelector(".icon");

     if (content.style.display === "block") {
         content.style.display = "none";
         icon.textContent = "+";
     } else {
         // Close the previously open accordion (if any)
         if (openAccordion) {
             openAccordion.nextElementSibling.style.display = "none";
             openAccordion.querySelector(".icon").textContent = "+";
         }

         content.style.display = "block";
         icon.textContent = "×";

         // Set the currently open accordion
         openAccordion = accordion;
     }
 }