<template>
	<div class="count">
		<span @click="updateQuantity(id, -1)">
			<Icon name="ic:outline-minus" class="icon" />
		</span>
		<span>
			{{ quantity }}
		</span>
		<span @click="increaseQuantity(id)">
			<Icon name="material-symbols:add-2" class="icon" />
		</span>
	</div>
</template>

<script setup lang='ts'>
import type CartItem from '~/types/cartItem';

const cartStore = useCartStore()
const { updateQuantity } = cartStore

const props = defineProps<{
	id: number,
	quantity: number,
	hasStock: boolean
}>()

const increaseQuantity = (id: number) => {
	if (!props.hasStock) {
		updateQuantity(id, 1)
	}
}
</script>

<style scoped lang='scss'>
.count {
	//background-color: #f5f7fa;
	height: 40px;
	min-width: 100px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 600px) {
		min-width: 60px;
	}

	.icon {
		font-size: 25px;
		cursor: pointer;
		transition: all 0.2s ease 0s;

		@media (max-width: 600px) {
			font-size: 18px;
		}

		&:hover {
			background-color: #f1117e;
		}
	}

	span {
		font-size: 22px;
		padding: 0 5px;

		@media (max-width: 600px) {
			font-size: 18px;
		}
	}
}
</style>