<template>
	<div class="product">
		<ElementsLike :id="product.id" class="absolute" />
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
		<button v-if="!isInCart" @click="addToCart" class="add-product">Add to cart</button>
		<ElementsCounter
			v-else
			:id="product.id"
			:quantity="quantity ? quantity : 0"
			class="product-count"
			:hasStock="hasInStock || false" />
	</div>
</template>

<script setup lang='ts'>
import type { Product } from '~/types/product';
import ProductRating from './elements/ProductRating.vue';
import type CartItem from '~/types/cartItem.ts';

const props = defineProps<{
	product: Product
}>()

const cartStore = useCartStore()

const isInCart = computed(() => {
	return cartStore.items.some(item => item.id === props.product.id)
})

const quantity = computed(() => {
	const current = cartStore.items.find(item => item.id === props.product.id)
	if (current) {
		return current.quantity
	}
})

const addToCart = () => {
	const itemToAdd: CartItem = {
		id: props.product.id,
		title: props.product.title,
		brand: props.product.brand,
		imageUrl: props.product.image_url,
		price: props.product.price,
		oldPrice: props.product.old_price,
		quantity: 1,
		isFavorit: false
	}
	cartStore.addItem(itemToAdd)
}

const { data } = await useFetch<Product>(`/api/${props.product.id}`)

const hasInStock = computed(() => {
	if (quantity.value) {
		return (data.value?.stock || Infinity) <= quantity.value
	}
})
</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

.product {
	background-color: #fff;
	border-radius: 15px;
	position: relative;

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

.product-count {
	background-color: $primary-color;
	color: #fff;
	justify-content: space-around;
}
</style>