document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes("@")) {
        alert("Please enter a valid email.");
    } else {
        alert("Form submitted successfully!");
    }
});
