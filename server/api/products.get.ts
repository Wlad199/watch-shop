import productsData from '../../server/data/products.json'

export default defineEventHandler(async (event) => {
	return productsData
})