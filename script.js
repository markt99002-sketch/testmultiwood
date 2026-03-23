function proceed() {
    const checkbox = document.getElementById("accept");

    // Check if user accepted terms
    if (!checkbox.checked) {
        alert("Please accept Terms & Conditions");
        return;
    }

    // Redirect to product page
    window.location.href = "products.html";
}