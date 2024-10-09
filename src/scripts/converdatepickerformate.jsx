// Function to format a date as "dd-mm-yyyy"
const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

// Function to format a time as "hh:mm am/pm"
const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    return `${hours}:${minutes} ${period}`;
};

// Convert a JavaScript Date object to the desired format
const convertDateToFormat = (date) => {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);
    return {
        date: formattedDate,
        time: formattedTime
    };
};

export { convertDateToFormat };