export const useProductFilters = () => {
	const router = useRouter();
	const route = useRoute();

	// For inputs
	const updateFilter = (key: string, value: string | null) => {
		const newQuery = { ...route.query }

		if (value && +value !== 0) {
			newQuery[key] = value
		} else {
			delete newQuery[key]
		}
		router.push({ query: newQuery })
	}

	// For Types, Brands
	const updateArrayFilter = (key: string, value: string, isChecked: boolean) => {
		const newQuery = { ...route.query }
		let currentValues = Array.isArray(newQuery[key])
			? [...(newQuery[key] as string[])]
			: (newQuery[key] ? [newQuery[key] as string] : []);

		if (isChecked) {
			if (!currentValues.includes(value)) currentValues.push(value)
		} else {
			currentValues = currentValues.filter(v => v !== value)
		}

		if (currentValues.length > 0) {
			newQuery[key] = currentValues;
		} else {
			delete newQuery[key]
		}
		console.log("New Query to push:", newQuery);
		router.push({ query: newQuery })
	}

	//For toggle switchers
	const toggleFilter = (key: string, isChecked: boolean) => {
		const newQuery = { ...route.query }
		if (isChecked) {
			newQuery[key] = 'true'
		} else {
			delete newQuery[key]
		}
		router.push({ query: newQuery })
	}

	return { updateArrayFilter, updateFilter, toggleFilter }
}