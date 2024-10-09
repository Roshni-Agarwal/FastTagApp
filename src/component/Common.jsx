// common.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { sortByDate } from '../scripts/sortjson';
import { calculateBalances } from '../scripts/calculateBalance';
import { useDuration } from '../context/DurationContext';


// //calculate total expenses
// const expenses = (filterdata, setTotal) => {
//     const totalExpenses = filterdata
//         .filter(item => parseFloat(item.amount) < 0) // Filter out expenses
//         .reduce((total, item) => total + parseFloat(item.amount), 0); // Sum up the expenses
    
//     setTotal(totalExpenses);

// }
// Helper function to convert DD-MM-YYYY to YYYY-MM-DD
const convertToISODate = (dateStr) => {
    const [day, month, year] = dateStr.split('-');
    return new Date(`${year}-${month}-${day}`);
};

// Helper function to filter data based on start and end dates
const filterDataByDateRange = (data, startDate, endDate) => {
    const start = convertToISODate(startDate);
    const end = convertToISODate(endDate);
    // console.log("start", start, "end", end);
    return data.filter(item => {
        const itemDate = convertToISODate(item.date);
        return itemDate >= start && itemDate <= end;
    });
};

// Filter function based on duration
export const filterData = (data, duration) => {
    const now = new Date();
    let pastDate;
    switch (duration) {
        case '1Day':
            pastDate = new Date(now.setDate(now.getDate() - 1));
            break;
        case '1Week':
            pastDate = new Date(now.setDate(now.getDate() - 7));
            break;
        case '1Month':
            pastDate = new Date(now.setMonth(now.getMonth() - 1));
            break;
        case '6Month':
            pastDate = new Date(now.setMonth(now.getMonth() - 6));
            break;
        default:
            pastDate = new Date(now.setFullYear(now.getFullYear() - 1));
            break;
    }
    // console.log('pastDate', pastDate)
    return data.filter(item => new Date(item.date.split('-').reverse().join('-')) >= pastDate);
};

// Custom hook for data fetching and filtering
export const useFetchAndFilterData = (selectedDuration) => {
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [error, setError] = useState(null);

    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get('transection.json');
                    const data = calculateBalances(res.data); 
                    const updatedData = sortByDate(data);
                    setFilteredTransactions(filterData(updatedData, selectedDuration));
                } catch (e) {
                    // console.log(e);
                    setError(e);
                }
            };
    
            fetchData();
        }, [selectedDuration]);
    

    

    return { filteredTransactions, error };
};

// Custom hook for data fetching and filtering by date range
export const useCalenderAndFilterData = (selectedRange) => {
    const [filteredTransactions1, setFilteredTransactions1] = useState([]);
    const [error1, setError1] = useState(null);

    // Ensure selectedRange is defined and has the required properties
    const { start = "", end = "" } = selectedRange || {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('transection.json');
                const data = calculateBalances(res.data);
                const updatedData = sortByDate(data);
                // console.log("data", updatedData)

                if (start && end) {
                    const filtered = filterDataByDateRange(updatedData, start, end);
                    console.log("filtered", filtered)
                    setFilteredTransactions1(filtered);
                    // expenses(filtered, setTotal)
                }   else {
                    setFilteredTransactions1(updatedData);
                }
            } catch (e) {
                // console.log(e);
                setError1(e);
            }
        };

        fetchData();
    }, [start, end]);

    console.log(filteredTransactions1, "Calender filteredTransactions");

    return { filteredTransactions1, error1 };
};