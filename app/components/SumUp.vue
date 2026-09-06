<template>
	<div class="quantity">
		<span>Quantity</span>
		<span>{{ totalProduct }}</span>
	</div>
	<div v-if="discountAmount" class="discount">
		<span>Discount</span>
		<span>$ {{ discountAmount }}</span>
	</div>
	<div class="total">
		<span>Total</span>
		<span>$ {{ totalPrice }}</span>
	</div>
	<div class="button-container">
		<ElementsButtonSimple type="button" @click="$emit('confirm')">
			Confirm
		</ElementsButtonSimple>
		<ElementsButtonSimple type="button" @click="$emit('cancel')">
			Back
		</ElementsButtonSimple>
	</div>
</template>

<script setup lang='ts'>
const cartStore = useCartStore()
const { totalProduct, totalPrice, discountAmount } = storeToRefs(cartStore)

const emit = defineEmits(['confirm', 'cancel'])
</script>

<style scoped lang='scss'>
div:not(:last-child) {
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	font-size: 20px;
	margin-bottom: 30px;
	position: relative;

	&:nth-child(3):after,
	&:nth-child(4):after {
		position: absolute;
		content: '';
		bottom: -15px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #c4c4c4;
	}
}


.quantity {}

.discount {}

.total {}

.button-container {
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	font-size: 20px;

	button {
		flex: 0 0 48%;

		&:first-child {
			background-color: #42b883;

			&:hover {
				background-color: #3aa374;
			}
		}
	}
}
</style>