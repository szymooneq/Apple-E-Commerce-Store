export interface cartItem {
	id: number;
	title: string;
	slug: string;
	price: number;
	createdAt: string;
	publishedAt: string;
	updatedAt: string;
	isNew: boolean;
	color: string;
	colorCode: string;
	image: cartItemImage;
	quantity: number;
}

interface cartItemImage {
	alternativeText: string;
	url: string;
}

export interface cartState {
	cartItems: cartItem[];
	cartCount: number;
	cartSubTotal: number;
}
