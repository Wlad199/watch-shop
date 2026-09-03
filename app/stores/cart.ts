import type CartItem from "~/types/cartItem"

export const useCartStore = defineStore('cart', () => {
	const items = ref<CartItem[]>([])

	const totalProduct = computed(() => {
		return items.value.reduce((acc, item) => acc + item.quantity, 0)
	})
	const totalPrice = computed(() => {
		return items.value.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(1)
	})

	const discountAmount = computed(() => {
		const result = items.value.reduce((acc, item) => {
			const old = item.oldPrice || item.price
			return (acc + (old - item.price) * item.quantity)
		}, 0)
		return result.toFixed(1)
	})

	const addItem = (product: CartItem) => {
		const existingItem = items.value.find(item => item.id === product.id)
		if (existingItem) {
			existingItem.quantity++
		} else {
			items.value.push({ ...product, quantity: 1 })
		}
	}
	const updateQuantity = (id: number, quantity: number) => {
		const item = items.value.find(item => item.id === id)
		if (item) {
			item.quantity = item.quantity + quantity
			if (item.quantity <= 0) removeItem(id)
		}
	}
	const removeItem = (id: number) => {
		items.value = items.value.filter(item => item.id !== id)
	}
	const clearCard = () => {
		items.value = []
	}
	return {
		items,
		totalProduct,
		totalPrice,
		discountAmount,
		addItem,
		updateQuantity,
		removeItem,
		clearCard
	}

}, {
	//persist: true
})