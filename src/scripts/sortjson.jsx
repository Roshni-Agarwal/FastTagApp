export function sortByDate(data) {
    return data.sort((a, b) => {
        // Helper function to convert date string to Date object
        const parseDate = (dateString) => {
            const [day, month, year] = dateString.split('-').map(Number);
            return new Date(year, month - 1, day); // Months are 0-indexed in JavaScript Date
        };

        // Helper function to convert time string to minutes since midnight
        const parseTime = (timeString) => {
            const [time, period] = timeString.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (period === 'pm' && hours !== 12) {
                hours += 12;
            }
            if (period === 'am' && hours === 12) {
                hours = 0;
            }
            return hours * 60 + minutes; // Convert to total minutes
        };

        // Create Date objects and time values
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        const timeA = parseTime(a.time);
        const timeB = parseTime(b.time);

        // First, compare dates in descending order
        if (dateA.getTime() !== dateB.getTime()) {
            return dateB.getTime() - dateA.getTime(); // Descending order
        }

        // If dates are the same, compare times in ascending order
        return timeB - timeA; // Ascending order
    });
}


