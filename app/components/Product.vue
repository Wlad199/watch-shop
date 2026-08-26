<template>
	<div class="product">
		<!--<HeartIcon height="1em" class="like" />-->
		<Icon name="material-symbols:favorite-rounded" class="like" />
		<div class="adaptive-image">
			<NuxtImg :src="product.image_url" format="webp" :alt="product.title" />
		</div>
		<div class="decription">
			<div class="price">
				<span class="price__current">${{ product.price }}</span>
				<span v-if="product.old_price" class="price__old">${{ product.old_price }}</span>
			</div>
			<!--<div class="rating"><svg width="80" height="16" viewBox="0 0 80 16" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M72 12.2388L76.944 15.2284L75.632 9.59391L80 5.80283L74.248 5.31392L72 0L69.752 5.31392L64 5.80283L68.368 9.59391L67.056 15.2284L72 12.2388Z"
						fill="#D5CDC5" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M56 12.2388L60.944 15.2284L59.632 9.59391L64 5.80283L58.248 5.31392L56 0L53.752 5.31392L48 5.80283L52.368 9.59391L51.056 15.2284L56 12.2388Z"
						fill="#FF9017" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M40 12.2388L44.944 15.2284L43.632 9.59391L48 5.80283L42.248 5.31392L40 0L37.752 5.31392L32 5.80283L36.368 9.59391L35.056 15.2284L40 12.2388Z"
						fill="#FF9017" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M24 12.2388L28.944 15.2284L27.632 9.59391L32 5.80283L26.248 5.31392L24 0L21.752 5.31392L16 5.80283L20.368 9.59391L19.056 15.2284L24 12.2388Z"
						fill="#FF9017" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M8 12.2388L12.944 15.2284L11.632 9.59391L16 5.80283L10.248 5.31392L8 0L5.752 5.31392L0 5.80283L4.368 9.59391L3.056 15.2284L8 12.2388Z"
						fill="#FF9017" />
				</svg>
				<span>7.5</span>
			</div>-->
			<div class="rating">
				<ProductRating :rating="product.rating" />
			</div>
			<div class="name">{{ product.title }}</div>
			<div class="brand">{{ product.brand }}</div>
		</div>
		<button class="add-product">Add to cart</button>
	</div>
</template>

<script setup lang='ts'>
import type { Product } from '~/types/product';
import HeartIcon from '@iconify-vue/griddy-icons/heart';
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