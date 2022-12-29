interface ApiImg {
	id: number;
	attributes: {
		alternativeText: string;
		width: number;
		height: number;
		url: string;
	};
}

export interface Category {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		image: {
			data: ApiImg;
		};
		products: {
			data: Array<Product>;
		};
	};
}

export interface Product {
	id: number;
	attributes: {
		title: string;
		description: string;
		price: number;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		image: {
			data: Array<ApiImg>;
		};
		categories: {
			data: Array<Category>;
		};
	};
}

export interface ProductData {
	title: string;
	description: string;
	price: number;
	image: {
		data: Array<ApiImg>;
	};
	categories: {
		data: Array<Category>;
	};
}

export interface CategoriesApi {
	data: Array<Category>;
}

export interface ProductApi {
	data: Array<Product>;
}
