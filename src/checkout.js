document.getElementById("cardNumber").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    e.target.value = value;
});

document.getElementById("expiryDate").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
    }
    e.target.value = value;
});

function processPayment() {
    let name = document.getElementById("cardholder").value.trim();
    let card = document.getElementById("cardNumber").value.trim();
    let expiry = document.getElementById("expiryDate").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (name === "" || card.length < 19 || expiry.length < 5 || cvv.length < 3) {
        alert("Please fill in all fields correctly.");
        return;
    }

    alert("Payment Successful!");
}
