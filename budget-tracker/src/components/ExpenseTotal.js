import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary'>
			<span>Spent so far: ${totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;

// importing our useContext and AppContext as usual
// Taking the expenses from state (line 5)
// Using the reduce function to get a total of all the costs and assigning this to a variable (line 7)
// Displaying the variable in our JSX (line 13)

// import React from 'react';

// const ExpenseTotal = () => {
// 	return (
// 		<div className='alert alert-primary'>
// 			<span>Spent so far: $1000</span>
// 		</div>
// 	);
// };

// export default ExpenseTotal;

