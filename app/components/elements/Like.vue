<template>
	<Icon
		name="material-symbols:favorite-rounded"
		:class="['like', { 'favorit': isFavorit(id) }]"
		@click="toggleFavorit(id)" />
</template>

<script setup lang='ts'>

const props = defineProps<{
	id: number
}>()

const wishlistStore = useWishlistStore()
const { isFavorit, toggleFavorit } = wishlistStore

</script>

<style scoped lang='scss'>
.like {

	font-size: 30px;
	cursor: pointer;
	transition: all 0.2s ease 0s;
	color: #aaaaaa;

	&:hover {
		color: #ff4d4f;
	}

	&.favorit {
		color: #ff4d4f;
	}

	&.absolute {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 1;
	}
}
</style>