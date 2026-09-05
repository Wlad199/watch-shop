export const useWishlistStore = defineStore('wishlist', () => {

	const list = useCookie<number[]>('wishlist_items', {
		default: () => [],
		watch: true,
		maxAge: 60 * 60 * 24 * 7
	})

	const isFavorit = (id: number) => list.value.includes(id)

	const toggleFavorit = (id: number) => {
		if (isFavorit(id)) {
			list.value = list.value.filter(i => i !== id)
		} else {
			list.value.push(id)
		}
	}
	return {
		list,
		isFavorit,
		toggleFavorit
	}

})