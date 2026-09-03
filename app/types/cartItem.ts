export default interface CartItem {
	id: number,
	title: string,
	brand: string,
	imageUrl: string,
	price: number,
	oldPrice?: number | null,
	quantity: number
}