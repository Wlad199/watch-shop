<template>
	<div class="container">
		<div class="shop-wrapper">
			<Aside :class="{ _active: isAsideShown }" @update-aside="toggleAside" ref="asideRef" />
			<div class="shop-content">
				<div class="shop-sort">
					<button @click="toggleAside">All categories</button>
					<SelectSimple v-model="sortBy" :options="optionsForSelect" />
				</div>
				<div class="products">
					<Product v-for="product in products" :key="product.id" :product="product" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>
import SelectSimple from '~/components/elements/SelectSimple.vue';
import type { Product } from '~/types/product';

const sortBy = ref('cheapest')

const optionsForSelect = [
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

const route = useRoute();

const { data: products } = await useFetch('/api/products', {
	query: computed(() => route.query)
})

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
</style>