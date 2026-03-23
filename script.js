function proceed() {
    const checkbox = document.getElementById("accept");
    if (!checkbox.checked) {
        alert("Please accept Terms & Conditions to continue.");
        return;
    }
    window.location.href = "products.html";
}
