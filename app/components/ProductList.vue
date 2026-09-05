<template>
	<div v-if="products && products.length > 0" class="shop-content">
		<div class="shop-sort">
			<button @click="$emit('toggle-categories')">
				All categories
			</button>
			<ElementsSelectSimple
				:modelValue="currentSort"
				:options="optionsForSelect"
				@update:modelValue="(val) => $emit('update:sort', val || null)" />
		</div>
		<div class="products">
			<Product v-for="product in products" :key="product.id" :product="product" />
		</div>
	</div>
	<div v-else-if="products" class="empty-page">
		<h3>No products were found for this filter.</h3>
		<ElementsButtonSimple @click="$emit('reset')" type="button">
			Reset Filters
		</ElementsButtonSimple>
	</div>
</template>

<script setup lang='ts'>
import type { Product } from '~/types/product';

const props = defineProps<{
	products: Product[],
	currentSort: string
}>()

const emit = defineEmits<{
	'update:sort': [value: string | null]
	'reset': []
	'toggle-categories': []
}>()

const optionsForSelect = [
	{ label: 'Default', value: '' },
	{ label: 'Cheapest', value: 'cheapest' },
	{ label: 'Most expensive', value: 'expensive' },
	{ label: 'Highly rated', value: 'rated' }
]
</script>

<style scoped lang='scss'>
.products {
	display: flex;
	gap: 15px;
	flex-wrap: wrap;
	margin-top: 20px;
	//margin-bottom: 20px;
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