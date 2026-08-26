import productsData from '../../server/data/products.json'

export default defineEventHandler(async (event) => {

	const query = getQuery(event)
	let filteredProducts = [...productsData]

	if (query.minPrice) {
		const min = parseFloat(query.minPrice as string)
		filteredProducts = filteredProducts.filter(p => p.price >= min)
	}
	if (query.maxPrice) {
		const max = parseFloat(query.maxPrice as string)
		filteredProducts = filteredProducts.filter(p => p.price <= max)
	}

	const types = Array.isArray(query.type) ? query.type : (query.type ? [query.type] : []);
	if (types.length > 0) {
		filteredProducts = filteredProducts.filter(p => types.includes(p.type.toLowerCase()));
	}

	const brands = Array.isArray(query.brand) ? query.brand : (query.brand ? [query.brand] : []);
	if (brands.length > 0) {
		filteredProducts = filteredProducts.filter(p => brands.includes(p.brand));
	}

	return filteredProducts
})