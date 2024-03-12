import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        let newBudgetValue = parseInt(event.target.value);
        const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

        if (newBudgetValue < totalSpending) {
            alert("Budget cannot be lower than total spending.");
            return;
        }

        if (newBudgetValue > 20000) {
            alert("Budget cannot exceed 20,000.");
            return;
        }

        if (isNaN(newBudgetValue)) {
            newBudgetValue = 0;
        }

        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
    };



    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input 
                type="number" 
                step="10" 
                value={budget} 
                onChange={handleBudgetChange}
            />

        </div>

       

    );


};

export default Budget;
