import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}

const [cartItems, setCartItems] = useState([]);
const [cartCount, setCartCount] = useState<number>(0);
const [cartSubTotal, setCartSubTotal] = useState<number>(0);

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
		</>
	);
}
