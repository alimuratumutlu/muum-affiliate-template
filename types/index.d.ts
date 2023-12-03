export type Product = {
	id: string;
	brand: string;
	description: string;
	images: string[];
	priceO: number;
	priceR: number;
	sizes: string[];
};

export type CartItem = {
	product: Product;
	quantity: number;
};

export type CartState = {
	items: CartItem[];
};

export type FilterState = {
	brands: string[];
	sizes: string[];
};

export type UserState = {
	username: string;
	email: string;
};

export type RootState = {
	cart: CartState;
	filter: FilterState;
	user: UserState;
};

export type UseProductsReturnType = [
	Product[],
	boolean,
	boolean,
	boolean,
	Set<unknown>,
	Set<unknown>
];

export type UseCartReturnType = [
	CartItem[],
	number,
	(product: Product) => void,
	(product: Product) => void,
	(product: Product) => void
];

export type UseFilterReturnType = [
	string[],
	string[],
	(brand: string) => void,
	(brand: string) => void,
	(size: string) => void,
	(size: string) => void,
	() => void
];

export type UseUserReturnType = [
	string,
	string,
	(username: string) => void,
	(email: string) => void
];
