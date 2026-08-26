export interface Product {
	id: number;
	slug: string;
	title: string;
	brand: string;
	price: number;
	old_price: number | null;
	description: string;
	type: string;
	stock: number;
	image_url: string;
	rating: number;
	specs: Specs;
}

interface Specs {
	material?: string;
	water?: boolean;
	[key: string]: string | boolean | undefined;
}