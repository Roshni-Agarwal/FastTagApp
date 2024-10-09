export function getBalanceColor(balance) {
    const balanceValue = parseFloat(balance);
    if (balanceValue < 0) {
      return 'red';
    } else if (balanceValue < 100) {
      return 'yellow';
    } else {
      return 'grey';
    }
  }

  export function getAmountColor(amount) {
    // Return color based on the amount's sign
    return parseFloat(amount) < 0 ? 'lightcoral' : 'lightgreen'; // Light red for negative, light green for positive
  }
