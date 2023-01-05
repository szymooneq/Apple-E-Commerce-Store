export interface product {
	id: number;
	quantity?: number;
	variant?: productVariant;
	attributes: {
		title: string;
		slug: string;
		price: number;
		isNew: boolean;
		image: {
			data: productImage[];
		};
		createdAt: string;
		publishedAt: string;
		updatedAt: string;
		variants: productVariant[];
		category: productCategory;
	};
}

export interface productVariant {
	id: number;
	value: string;
	colorCode: string;
	displayName: string;
	image: {
		data: productImage;
	};
}

interface productImage {
	id: number;
	attributes: {
		alternativeText: string;
		url: string;
	};
}

interface productCategory {
	data: {
		id: number;
		attributes: {
			name: string;
			slug: string;
			createdAt: string;
			publishedAt: string;
			updatedAt: string;
		};
	};
}
