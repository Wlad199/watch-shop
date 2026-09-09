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
		<ElementsButtonSimple
			@click="showModal = true"
			type="button"
			:disabled="!cartStore.items.length">
			Go to order
		</ElementsButtonSimple>

		<ElementsModal v-model="showModal">
			<template #title>
				<h2>Please confirm your order</h2>
			</template>
			<template #body>
				<SumUp @confirm="showMessage" @cancel="showModal = false" />
			</template>
		</ElementsModal>

		<ElementsModal v-model="showFinalModel">
			<template #title>
				<h2 class="modal-title">The order has been confirmed</h2>
			</template>
			<template #body>
				<ElementsButtonSimple type="button" @click="showFinalModel = false" class="button-right">
					OK
				</ElementsButtonSimple>
			</template>
		</ElementsModal>

	</div>
</template>

<script setup lang='ts'>
const cartStore = useCartStore()
const { totalProduct, totalPrice, discountAmount } = storeToRefs(cartStore)

const showModal = ref(false)
const showFinalModel = ref(false)

const showMessage = () => {
	showModal.value = false
	showFinalModel.value = true
	cartStore.items = []
}

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

.button-right {
	display: block;
	margin-left: auto;
	width: 100px;
}

.modal-title {
	line-height: 130%;
	font-weight: 400;
}
</style>