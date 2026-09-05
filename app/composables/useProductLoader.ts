import type { Product } from "~/types/product"

export const useProductLoader = (apiEndpoint: string) => {
	const route = useRoute()
	const router = useRouter()


	const { data: products, error } = useFetch<Product[]>('/api/products', {
		query: computed(() => route.query)
	})

	watchEffect(() => {
		if (error.value) {
			console.error('Fetch error on watchEffect:', error.value)

			if (error.value.status === 404 || error.value.status === 500) {
				throw createError({
					statusCode: error.value.status,
					statusMessage: error.value.message || 'Произошла ошибка',
					data: error.value.data
				})
			}
		}
	})

	const resetFilters = () => {
		router.push({ query: {} })
	}
	return {
		products,
		error,
		resetFilters
	}
}