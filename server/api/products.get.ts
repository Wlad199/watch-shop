import productsData from '../../server/data/products.json'

export default defineEventHandler(async (event) => {

	const query = getQuery(event)
	let filteredProducts = [...productsData]

	// Min & Max price
	if (query.minPrice) {
		const min = parseFloat(query.minPrice as string)
		filteredProducts = filteredProducts.filter(p => p.price >= min)
	}
	if (query.maxPrice) {
		const max = parseFloat(query.maxPrice as string)
		filteredProducts = filteredProducts.filter(p => p.price <= max)
	}

	// Types: mechanical vs difital
	const types = Array.isArray(query.type) ? query.type : (query.type ? [query.type] : []);
	if (types.length > 0) {
		filteredProducts = filteredProducts.filter(p => types.includes(p.type.toLowerCase()));
	}

	// Brands: Casio, Seico and so on
	const brands = Array.isArray(query.brand) ? query.brand : (query.brand ? [query.brand] : []);
	if (brands.length > 0) {
		filteredProducts = filteredProducts.filter(p => brands.includes(p.brand));
	}

	// Water resist
	if (query.waterResist === 'true') {
		filteredProducts = filteredProducts.filter(p => p.specs.water === true)
	}

	// High Rating
	if (query.highRating === 'true') {
		filteredProducts = filteredProducts.filter(p => p.rating >= 4.5)
	}

	// Discount
	if (query.discounts === 'true') {
		filteredProducts = filteredProducts.filter(p =>
			p.old_price !== null &&
			p.old_price > p.price
		)
	}

	// Sort by head select

	if (query.sort) {
		if (query.sort === 'cheapest') {
			return filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
		}
		if (query.sort === 'expensive') {
			return filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
		}
		if (query.sort === 'rated') {
			return filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating)
		}
	}


	return filteredProducts
})