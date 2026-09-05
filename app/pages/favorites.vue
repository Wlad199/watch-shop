<template>
	<div class="container">
		<div class="shop-wrapper">

			<Aside :class="{ _active: isAsideShown }" @update-aside="toggleAside" ref="asideRef" />

			<ProductList
				:products="favorireProducts || []"
				:current-sort="route.query.sort as string || ''"
				@update:sort="(val) => updateFilter('sort', val)"
				@reset="resetFilters"
				@toggle-categories="toggleAside">
			</ProductList>

		</div>
	</div>
</template>

<script setup lang='ts'>
const { products, resetFilters } = useProductLoader('/api/products')
const { updateFilter } = useProductFilters()
const route = useRoute()
const wishlistStore = useWishlistStore()
const { isAsideShown, toggleAside } = useAside()

const favorireProducts = computed(() => {
	return products.value?.filter(product => {
		return wishlistStore.list.includes(product.id)
	})
})

</script>

<style scoped lang='scss'>
.shop-wrapper {
	display: flex;
	gap: 10px;
	margin: 20px 0;
}
</style>