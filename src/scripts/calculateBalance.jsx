/**
 * Calculate cumulative balances for transactions, updating from the latest to the earliest transaction.
 * @param {Array} data - Array of transactions.
 * @returns {Array} - Array of transactions with updated balance.
 */
export function calculateBalances(data) {
    let currentBalance = 0;

    // Sort transactions from latest to earliest date
    const sortedData = sortByDateTimeAndBalance(data);
    // Calculate balance cumulatively
    return sortedData.map(item => {
        const amount = parseFloat(item.amount); // Convert amount to number
        currentBalance += amount; // Update balance
        return { ...item, balance: currentBalance.toFixed(2) }; // Return updated item with balance
    });
}

export function sortByDateTimeAndBalance(data) {
    return data.sort((a, b) => {
        // Convert date strings to Date objects
        const formatDate = (dateString) => {
            const [day, month, year] = dateString.split('-');
            return new Date(`${year}-${month}-${day}`);
        };

        // Convert time strings to a format that can be compared with Date
        const formatTime = (timeString) => {
            const [time, period] = timeString.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'pm' && hours !== 12) {
                hours += 12;
            }
            if (period === 'am' && hours === 12) {
                hours = 0;
            }
            return { hours, minutes };
        };

        // Create Date objects including time
        const createDateTime = (dateString, timeString) => {
            const date = formatDate(dateString);
            const { hours, minutes } = formatTime(timeString);
            return new Date(date.setHours(hours, minutes));
        };

        const dateTimeA = createDateTime(a.date, a.time);
        const dateTimeB = createDateTime(b.date, b.time);

        // First, sort by date and time
        const dateTimeComparison = dateTimeA - dateTimeB;

        // If date and time are the same, sort by balance
        if (dateTimeComparison === 0) {
            // Convert balance to numbers for comparison
            const balanceA = parseFloat(a.balance) || 0;
            const balanceB = parseFloat(b.balance) || 0;
            return balanceA - balanceB; // Ascending order for lowest balance first
        }

        return dateTimeComparison; // Default sorting by date and time
    });
}
