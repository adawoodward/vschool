import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

	return (
		<div className='alert alert-secondary'>
			<span>Budget: ${budget}</span>
		</div>
	);
};

export default Budget;


// We have to import AppContext from our Context (line 2)
// We import the useContext hook, and pass our AppContext to it -  this is how a component connects to the context in order to get values from global state
// We use destructuring to get the budget from context (line 5)
// We're rendering the budget in our JSX (line 9)