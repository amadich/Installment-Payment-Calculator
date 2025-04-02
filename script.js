function calculateInstallment() {
    // Get the values from inputs
    let price = parseFloat(document.getElementById("price").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let duration = parseInt(document.getElementById("duration").value);

    // Validate inputs
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid price.");
        return;
    }
    if (isNaN(interestRate) || interestRate < 0) {
        alert("Please enter a valid interest rate.");
        return;
    }
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    // Calculate total amount with interest
    let totalAmount = price * (1 + (interestRate / 100) * duration);

    // Calculate monthly installment
    let months = duration * 12;
    let monthlyInstallment = totalAmount / months;

    // Display result
    document.getElementById("result").innerHTML = `Total Amount: ${totalAmount.toFixed(2)} TND<br>
                                                   Monthly Installment: ${monthlyInstallment.toFixed(2)} TND`;
}
