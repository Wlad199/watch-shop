export const useAside = () => {

	const isAsideShown = ref(false)
	const asideRef = ref(null)

	const toggleAside = () => {
		isAsideShown.value = !isAsideShown.value
	}
	onClickOutside(asideRef, () => {
		if (isAsideShown.value) {
			isAsideShown.value = false
		}
	})

	return {
		isAsideShown,
		toggleAside
	}
}