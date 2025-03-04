import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Decrease by 10
        };

        dispatch({
            type: 'RED_EXPENSE', // Use a different action type for decrease
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td>
                <button className="increase-btn" onClick={() => increaseAllocation(props.name)}>+</button>
            </td>
            <td>
                <button className="decrease-btn" onClick={() => decreaseAllocation(props.name)}>-</button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;
