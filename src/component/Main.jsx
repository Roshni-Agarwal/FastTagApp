import React, { useState } from 'react';
import Tile from './Tile';
import { useDuration } from '../context/DurationContext';
import { useFetchAndFilterData, useCalenderAndFilterData } from './Common'; // Import the custom hook

function Main() {
    // const {data, setData} = useState([]);
    const { selectedDuration, selectedRange, total, setTotal } = useDuration(); 
    const { filteredTransactions, error } = useFetchAndFilterData(selectedDuration);
    const { filteredTransactions1, error1} = useCalenderAndFilterData(selectedRange, selectedDuration);
    
    // if(filteredTransactions.length !== 0) {
    //     setData(filteredTransactions);
    // } else {
    //     setData(filteredTransactions1);
    // }


    if (error || error1) {
        return <p>Error fetching data</p>;
    }

    return (
        <div className='row'>
            {filteredTransactions.length === 0 && filteredTransactions1.length === 0 ? (
                <p>No data available</p>
            ) : ( !selectedRange  ?
                    (filteredTransactions.map((item) => (
                        <div key={item.id} className='col-md-3 py-2'>
                            <Tile 
                                time={item.time}
                                date={item.date}
                                amount={item.amount}
                                place={item.place}
                                balance={item.balance}
                            />
                        </div>
                    ))) : 

                    (filteredTransactions1.map((item) => (
                        <div key={item.id} className='col-md-3 py-2'>
                            <Tile 
                                time={item.time}
                                date={item.date}
                                amount={item.amount}
                                place={item.place}
                                balance={item.balance}
                            />
                        </div>
                    )))
            )}
        </div>
    );
}

export default Main;
