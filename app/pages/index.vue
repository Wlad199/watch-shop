<template>
	<div class="container">
		<div class="shop-wrapper">
			<Aside :class="{ _active: isAsideShown }" @update-aside="toggleAside" ref="asideRef" />
			<div v-if="products && products.length > 0" class="shop-content">
				<div class="shop-sort">
					<button @click="toggleAside">All categories</button>
					<SelectSimple
						:modelValue="(route.query.sort as string) || ''"
						:options="optionsForSelect"
						@update:modelValue="(val) => updateFilter('sort', val || null)" />
				</div>
				<div class="products">
					<Product v-for="product in products" :key="product.id" :product="product" />
				</div>
			</div>
			<div v-else-if="products" class="empty-page">
				<h3>No products were found for this filter.</h3>
				<ButtonSimple @click="resetFilters" type="button">
					Reset Filters
				</ButtonSimple>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import ButtonSimple from '~/components/elements/ButtonSimple.vue';
import SelectSimple from '~/components/elements/SelectSimple.vue';
import type { Product } from '~/types/product';
const { updateFilter } = useProductFilters();
const route = useRoute()

const optionsForSelect = [
	{ label: 'Default', value: '' },
	{ label: 'Cheapest', value: 'cheapest' },
	{ label: 'Most expensive', value: 'expensive' },
	{ label: 'Highly rated', value: 'rated' }
]

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


const { data: products, error } = await useFetch<Product[]>('/api/products', {
	query: computed(() => route.query)
})


watchEffect(() => {
	if (error.value) {
		console.error('Fetch error on watchEffect:', error.value)

		if (error.value.statusCode === 404 || error.value.statusCode === 500) {
			throw createError({
				statusCode: error.value.statusCode,
				statusMessage: error.value.statusMessage || 'Произошла ошибка',
				data: error.value.data
			})
		}
	}
})

const router = useRouter()
const resetFilters = () => {
	router.push({ query: {} })
};
</script>

<style scoped lang='scss'>
.shop-wrapper {
	display: flex;
	gap: 10px;
}

.shop-content {
	margin-top: 20px;
}

.products {
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
	margin-top: 20px;
	margin-bottom: 20px;
}

.shop-sort {
	display: flex;
	gap: 10px;

	@media (max-width: 767px) {
		display: block;
	}

	button {
		display: none;

		@media (max-width: 992px) {
			display: block;
			background-color: #7a65b4;
			height: 40px;
			width: 300px;
			border-radius: 8px;
			color: #fff;
			font-size: 18px;
			transition: all 0.2s ease 0s;

			&:hover {
				background-color: #6750a4;
			}
		}

		@media (max-width: 767px) {
			margin-bottom: 10px;
		}
	}
}

.empty-page {
	margin-top: 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	max-width: 767px;
	margin: 0 auto;

	@media (max-width: 992px) {
		margin-top: 40px;
	}

	h3 {
		font-size: 26px;
		margin-bottom: 40px;
		line-height: 130%;
	}

	button {
		height: 50px;
		width: 250px;
		margin: 0 auto;
		color: #fff;
		font-size: 20px;
	}
}
</style>