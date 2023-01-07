export interface Product {
	id: number;
	quantity?: number;
	variant?: ProductVariant;
	attributes: {
		title: string;
		slug: string;
		price: number;
		isNew: boolean;
		image: {
			data: ProductImage[];
		};
		createdAt: string;
		publishedAt: string;
		updatedAt: string;
		variants: ProductVariant[];
		category: ProductCategory;
	};
}

export interface ProductVariant {
	id: number;
	value: string;
	colorCode: string;
	displayName: string;
	image: {
		data: ProductImage;
	};
}

interface ProductImage {
	id: number;
	attributes: {
		alternativeText: string;
		url: string;
	};
}

interface ProductCategory {
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
