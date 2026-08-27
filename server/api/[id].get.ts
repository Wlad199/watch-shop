import productsData from '../../server/data/products.json'

export default defineEventHandler((event) => {
	const id = getRouterParam(event, 'id')

	const product = productsData.find(p => {
		return String(p.id) === id
	})

	if (!product) {
		throw createError({
			statusCode: 404,
			statusMessage: 'There is no good'
		})
	}
	return product
})