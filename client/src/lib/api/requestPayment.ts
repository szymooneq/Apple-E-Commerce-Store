import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { cartStateInterface } from '../interfaces/cart';

const STRIPE_URL = import.meta.env.VITE_STRIPE_APP_DEV_URL;
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const POST_PARAMS = axios.create({
	baseURL: STRIPE_URL,
	headers: {
		Authorization: 'bearer ' + import.meta.env.VITE_STRIPE_APP_ADMIN_TOKEN
	}
});

const requestPayment = async (
	cartState: cartStateInterface,
	setLoading: (state: boolean) => void
) => {
	setLoading(true);
	try {
		const stripe = await stripePromise;
		const res = await POST_PARAMS.post('/api/orders', {
			products: cartState.cartItems
		});

		await stripe?.redirectToCheckout({
			sessionId: res.data.stripeSession.id
		});
	} catch (error) {
		setLoading(false);
		console.log(error);
	}
};

export default requestPayment;
