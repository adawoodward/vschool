import React, {useReducer, createContext} from "react"

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

// Adding a new case statement, to handle our DELETE_EXPENSE action. We're using the filter array method to remove the expense that has the ID which we received from the payload.


// We're adding an initial budget
// We're adding a dummy list of expenses
// the intialState properties do not need to have values, they can be set to empty strings, empty arrays, and so on. We're adding data for visual purposes
// Creating a function which accepts the current state, and an action (line 1)
// We use a switch based on the action.type to decide how to update the state (line 2)
// For now since we’re just getting things set up we’re just going to return the default state, and add actions later as we need them (line 3)

// const AppReducer = (state, action) => {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// };

// We're checking the type of the action (which we get from the action variable) (line 2)
// Adding a new case to the switch statement called "ADD_EXPENSE" (line 3)
// Returning a new state object with the new expense taking from the payload (which we get from the action variable) (line 4)
