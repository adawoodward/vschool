import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    // const expenses = [
	// 	{ id: 12, name: 'shopping', cost: 40 },
	// 	{ id: 13, name: 'holiday', cost: 400 },
	// 	{ id: 14, name: 'car service', cost: 50 },
	// ];

    const { expenses } = useContext(AppContext);

    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList