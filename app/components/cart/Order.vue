<template>
	<div class="order">
		<h2>Your cart</h2>
		<div class="order__price row">
			<span>Products ({{ totalProduct }})</span>
			<span>$ {{ totalPrice }}</span>
		</div>
		<div v-if="+discountAmount" class="order__discount row">
			<span>Discount</span>
			<span>$ {{ discountAmount }}</span>
		</div>
		<div class="order__total row">
			<h2>Total</h2>
			<span>$ {{ totalPrice }}</span>
		</div>
		<ButtonSimple type="button">Go to order</ButtonSimple>
	</div>
</template>

<script setup lang='ts'>
import ButtonSimple from '../elements/ButtonSimple.vue';

const cartStore = useCartStore()
const { totalProduct, totalPrice, discountAmount } = storeToRefs(cartStore)

</script>

<style scoped lang='scss'>
h2 {
	font-size: 24px;
	margin-bottom: 30px;
	font-weight: 700;
}

.row {
	display: flex;
	gap: 20px;
	//align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	font-size: 20px;

	span:first-child {
		line-height: 130%;
	}

	span:last-child {
		font-weight: 700;
	}
}

.order {
	background-color: #fff;
	border-radius: 10px;
	padding: 20px;

	@media (max-width: 600px) {
		padding: 5px;
		margin-top: 30px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	&__price {}

	&__discount {
		span:last-child {
			color: #f11182;
		}
	}

	&__total {
		font-size: 26px;
		margin-top: 30px;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: -15px;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: #cbd6e4;
		}

		span {
			color: #18c451;
		}
	}

	button {
		width: 100%;
		height: 50px;
	}
}
</style>