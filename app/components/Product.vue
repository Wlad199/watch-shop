<template>
	<div class="product">
		<Icon name="material-symbols:favorite-rounded" class="like" />
		<div class="adaptive-image">
			<NuxtLink :to="`/catalog/${product.id}`">
				<NuxtImg :src="product.image_url" format="webp" :alt="product.title" />
			</NuxtLink>
		</div>
		<div class="decription">
			<div class="price">
				<span class="price__current">${{ product.price }}</span>
				<span v-if="product.old_price" class="price__old">${{ product.old_price }}</span>
			</div>
			<div class="rating">
				<ProductRating :rating="product.rating" />
			</div>
			<div class="name">
				<NuxtLink :to="`/catalog/${product.id}`">
					{{ product.title }}
				</NuxtLink>
			</div>
			<div class="brand">{{ product.brand }}</div>
		</div>
		<button class="add-product">Add to cart</button>
	</div>
</template>

<script setup lang='ts'>
import type { Product } from '~/types/product';
import ProductRating from './elements/ProductRating.vue';


const props = defineProps<{
	product: Product
}>()

</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

.product {
	flex: 0 0 300px;
	background-color: #fff;
	border-radius: 15px;
	position: relative;

	@media (max-width: 1300px) {
		flex: 0 0 250px;
	}

	display: flex;
	flex-direction: column;
}

.adaptive-image {
	position: relative;
	padding-bottom: 133%;

	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 15px 15px 0 0;
	}
}

.decription {
	margin-top: 10px;
	padding: 10px;
	flex: 1 1 auto;
}

.price {
	&__current {
		font-size: 18px;
		font-weight: 600;
		color: #1c1c1c;
		margin-right: 20px;
	}

	&__old {
		text-decoration: line-through;
		color: #8b96a5;
	}

	margin-bottom: 10px;
}

.rating {
	margin-bottom: 10px;
}

.name {
	color: #606060;
	margin-bottom: 5px;
}

.brand {
	color: #606060;
}

.add-product {
	background-color: $primary-color;
	height: 40px;
	width: 100%;
	border-radius: 8px;
	color: #fff;
	font-size: 18px;
	transition: all 0.2s ease 0s;
	//margin-top: 10px;

	&:hover {
		background-color: #503e7d;
	}
}

.like {
	position: absolute;
	top: 5px;
	right: 5px;
	z-index: 1;
	font-size: 30px;
	cursor: pointer;
	transition: all 0.2s ease 0s;
	color: #aaaaaa;

	&:hover {
		color: red;
		//fill: red;
		//stroke: red;
	}
}
</style>