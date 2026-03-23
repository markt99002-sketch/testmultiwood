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
function generateQR() {
    const qrDiv = document.createElement("div");

    new QRCode(qrDiv, {
        text: "https://markt99002-sketch.github.io/testmultiwood",
        width: 150,
        height: 150
    });

    const canvas = qrDiv.querySelector("canvas");

    if (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qr-code.png";
        link.click();
    } else {
        alert("QR generation failed. Try again.");
    }
}
