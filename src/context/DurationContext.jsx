import React, { createContext, useContext, useState } from 'react';

const DurationContext = createContext();

export function DurationProvider({ children }) {
  const [selectedDuration, setSelectedDuration] = useState('6Month'); // Default value
  const [selectedRange, setSelectedRange] = useState({});
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  return (
    <DurationContext.Provider value={{ selectedDuration, setSelectedDuration, selectedRange, setSelectedRange, filteredTransactions, setFilteredTransactions, error, setError, total, setTotal }}>
      {children}
    </DurationContext.Provider>
  );
}

export function useDuration() {
  return useContext(DurationContext);
}
