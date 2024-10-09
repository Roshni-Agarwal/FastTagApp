export function formatAmount(amount) {
    // Convert amount to number and format it
    const number = Math.abs(parseFloat(amount)); // Use absolute value to remove negative signs
    return `₹${number.toFixed(2)}`; // Format to two decimal places and prepend ₹ symbol
  }