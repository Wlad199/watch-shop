<template>
	<div v-if="product" class="container">
		<ElementsBreadcrumbs />
		<div class="good-wrapper">
			<div class="image">
				<ElementsLike :id="product.id" class="absolute" />
				<NuxtImg :src="product.image_url" format="webp" :alt="product.title" />
			</div>
			<div class="card">
				<h1 class="card__title">{{ product.title }}</h1>
				<div class="card__id">Item No.: {{ product.id }}</div>
				<div class="card__top">
					<div class="card__brand">{{ product.brand }}</div>
					<div class="card__rating">
						<Icon name="ic:baseline-star" class="star-icon" />
						<span>{{ product.rating }}</span>
					</div>
				</div>
				<div class="card__prices">
					<div class="card__price">$ {{ product.price }}</div>
					<div v-if="product.old_price" class="card__old-price">$ {{ product.old_price }}</div>
				</div>
				<ButtonSimple
					v-if="!isInCart"
					@click="addToCart"
					type="button"
					class="button-cart">
					Add to cart
				</ButtonSimple>
				<ElementsButtonLink v-else path="/cart">Go to cart</ElementsButtonLink>
				<ul class="card__params">
					<li>
						<span>Type</span>
						<span>{{ product.type }}</span>
					</li>
					<li>
						<span>Country of manufacture</span>
						<span>China</span>
					</li>
					<li v-if="product.specs.material">
						<span>Case material</span>
						<span>{{ product.specs.material }}</span>
					</li>
					<li>
						<span>Water resist</span>
						<span>{{ product.specs.water ? 'Yes' : 'No' }}</span>
					</li>
					<li>
						<span>Stock</span>
						<span>{{ product.stock }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="description">
			<h3 class="description__title">Description</h3>
			<div class="description__text">
				Conquering the peaks, remember what is most valuable to you. We are pleased to
				present a collection of watches with the characteristics of a winner. It is well known that to achieve
				success and luck, one must properly balance one's time, and Rolex watches will undoubtedly be your talisman
				and companion to great victories. Take a step with your time, provoke fate for luck, and the men's
				mechanical wristwatches will perfectly complement your image and protect your time.
				<p>Watches come in a black watch box!</p>
			</div>
		</div>
	</div>

	<div v-else-if="error" class="container">
		<div class="error-content">
			<h1>Product not found</h1>
			<p>Unfortunately, this product has been removed or the link is invalid.</p>
			<ButtonLink path="/">
				Go back
			</ButtonLink>
		</div>
	</div>
</template>

<script setup lang='ts'>
import ButtonLink from '~/components/elements/ButtonLink.vue';
import ButtonSimple from '~/components/elements/ButtonSimple.vue';
import type CartItem from '~/types/cartItem';
import type { Product } from '~/types/product';

const { id } = useRoute().params

const { data: product, error } = await useFetch<Product>(`/api/${id}`)

useHead({
	title: product.value ? product.value.title : 'Товар не найден'
})

const cartStore = useCartStore()

const isInCart = computed(() => {
	return cartStore.items.some(item => item.id === product.value?.id)
})
const addToCart = () => {
	if (product.value) {
		const itemToAdd: CartItem = {
			id: product.value.id,
			title: product.value.title,
			brand: product.value.brand,
			imageUrl: product.value.image_url,
			price: product.value.price,
			oldPrice: product.value.old_price,
			quantity: 1,
			isFavorit: false
		}
		cartStore.addItem(itemToAdd)
	}
}

</script>

<style scoped lang='scss'>
.good-wrapper {
	display: flex;
	gap: 20px;
	margin-top: 30px;
	margin-bottom: 60px;

	@media (max-width: 767px) {
		display: block;
		margin: 20px 0;
	}
}

.image {
	flex: 0 0 35%;
	position: relative;
	padding-bottom: 50%;

	@media (max-width: 992px) {
		flex: 0 0 50%;
	}

	@media (max-width: 767px) {
		margin-bottom: 20px;
		padding-bottom: 120%;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
}

.card {
	flex: 0 0 65%;

	@media (max-width: 992px) {
		flex: 0 0 50%;
	}

	&__title {
		font-size: 36px;
		margin-bottom: 20px;
		line-height: 130%;

		@media (max-width: 992px) {
			font-size: 26px;
		}

		@media (max-width: 767px) {
			margin-bottom: 15px;
		}
	}

	&__id {
		color: #b1b6c7;
		margin-bottom: 30px;

		@media (max-width: 767px) {
			margin-bottom: 15px;
		}
	}

	&__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40px;

		@media (max-width: 767px) {
			margin-bottom: 30px;
		}
	}

	&__brand {
		font-size: 24px;
		font-weight: 600;
	}

	&__rating {
		font-size: 22px;
		display: flex;
		gap: 5px;
		align-items: center;
		margin-right: 15px;
	}

	&__prices {
		display: flex;
		gap: 40px;
		font-size: 40px;
		margin-bottom: 50px;

		@media (max-width: 767px) {
			font-size: 28px;
			margin-bottom: 30px;
		}
	}

	&__old-price {
		color: #b1b6c7;
		text-decoration: line-through;
	}

	.button-cart {
		background-color: #745eb0;
		color: #fff;
		height: 50px;
		width: 250px;
		font-size: 26px;

		&:hover {
			background-color: #6750a4;
		}

		@media (max-width: 767px) {
			width: 100%;
			margin-bottom: 20px;
		}
	}

	&__params {

		li {
			display: flex;
			gap: 10px;
			position: relative;
			margin: 30px 0;

			&:not(:last-child)::after {
				content: '';
				position: absolute;
				bottom: -15px;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: #c9cfd3;
			}

			span {
				flex: 0 0 50%;
				line-height: 130%;

				&:first-child {
					font-size: 22px;
					color: #71808c;
				}

				&:last-child {
					font-size: 18px;
					color: #000;
				}

				@media (max-width: 767px) {
					&:first-child {
						flex: 1 1 auto;
					}

					&:last-child {
						flex: 0 0 20%;
					}
				}
			}
		}
	}
}

.description {
	max-width: 767px;
	margin-bottom: 50px;

	@media (max-width: 767px) {
		margin-bottom: 30px;
	}

	&__title {
		font-size: 32px;
		margin-bottom: 20px;
	}

	&__text {
		font-size: 18px;
		line-height: 130%;
		color: #2d2d2d;
	}
}

.star-icon {
	font-size: 28px;
	color: #f9b500;
}

.like {
	position: absolute;
	top: 12px;
	right: 12px;
	z-index: 1;
	font-size: 30px;
	cursor: pointer;
	transition: all 0.2s ease 0s;
	color: #aaaaaa;

	&:hover {
		color: red;
	}
}

.error-content {
	margin: 0 auto;
	max-width: 767px;

	h1 {
		font-size: 28px;
		padding: 30px 0;
	}

	p {
		margin-bottom: 20px;
	}
}
</style>