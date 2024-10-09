import React, { useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDuration } from '../context/DurationContext';

// Helper function to format date as Y-m-d
const formatDate = (date) => {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

function SelectRange1() {
    const { setSelectedRange, setSelectedDuration } = useDuration();

    useEffect(() => {
        // Initialize Flatpickr
        flatpickr("#dateRange", {
            mode: "range",
            dateFormat: "d-m-Y",
            maxDate: new Date(),
            onChange: (selectedDates) => {
                if (selectedDates.length === 2) {
                    // Convert selected dates to the desired format
                    const [startDate, endDate] = selectedDates;
                    const formattedStartDate = formatDate(startDate);
                    const formattedEndDate = formatDate(endDate);
                    setSelectedRange({ start: formattedStartDate, end: formattedEndDate });
                    setSelectedDuration('');
                } else {
                    // Clear the range if less than 2 dates are selected
                    setSelectedRange(null);
                }
            }
        });
    }, [setSelectedRange]);

    return (
        <>
            <form>
                <label htmlFor="dateRange">Choose a date range:</label>
                <input type="text" id="dateRange" name="dateRange" style={{ width: 250 }} />
            </form>
        </>
    );
}

export default SelectRange1;
