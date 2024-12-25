 script.js

function calculateProfit() {
     Get values from the input fields
    const price = parseFloat(document.getElementById('price').value);
    const shipping = parseFloat(document.getElementById('shipping').value);
    const etsyFees = parseFloat(document.getElementById('etsyFees').value);
    const cost = parseFloat(document.getElementById('cost').value);

     Check if inputs are valid
    if (isNaN(price)  isNaN(shipping)  isNaN(etsyFees)  isNaN(cost)) {
        alert(Please enter valid numbers for all fields.);
        return;
    }

     Calculate total expenses
    const totalExpenses = shipping + etsyFees + cost;

     Calculate profit
    const profit = price - totalExpenses;

     Display the profit
    document.getElementById('profitAmount').textContent = `$${profit.toFixed(2)}`;
}
