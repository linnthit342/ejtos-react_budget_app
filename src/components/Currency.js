import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';





const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className="currency-container">
            <label htmlFor="currencyDropdown">Currency: </label>
            <select id="currencyDropdown" className="currency-dropdown" onChange={handleCurrencyChange}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
