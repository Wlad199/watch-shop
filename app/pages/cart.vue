<template>
	<div class="container">
		<div class="cart-wrapper">
			<div class="products">
				<h3 class="label">{{ cartStore.items.length > 0 ? 'Available for order' : 'Cart is empty' }}</h3>
				<ul class="product-list">
					<CartProduct v-for="item in cartStore.items" :key="item.id" :product="item" />
				</ul>
			</div>
			<CartOrder class="cart-order" />
		</div>
	</div>
</template>

<script setup lang='ts'>

const cartStore = useCartStore()

</script>

<style scoped lang='scss'>
.cart-wrapper {
	display: flex;
	gap: 15px;
	margin-top: 30px;
	margin-bottom: 30px;

	@media (max-width: 992px) {
		display: block;
	}
}


.products {
	flex: 0 0 700px;

	@media (max-width: 1100px) {
		flex: 0 0 600px;
	}
}

.cart-order {
	flex: 1 1 auto;
}

.label {
	font-size: 22px;
	font-weight: 700;
	padding: 20px 20px;
	background-color: #fff;
	border-radius: 15px;
	margin-bottom: 15px;
}

.product-list {}
</style>