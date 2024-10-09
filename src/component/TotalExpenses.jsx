import React from 'react'
import { useDuration } from '../context/DurationContext';


function TotalExpenses() {
    const { selectedDuration, selectedRange, total } = useDuration(); 

    return (
        <>
            {(selectedDuration !== '6Month' || selectedRange) ? (<h6>Total Expenses: {total}</h6>) : '' }
        </>
    )
}

export default TotalExpenses
