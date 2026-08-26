<template>
	<div class="aside">
		<div class="parameter-wrapper">
			<div class="parameter">
				<h3 class="title">Price</h3>
				<div class="input-wrapper">
					<input type="number" placeholder="min price">
					<input type="number" placeholder="max price">
				</div>
			</div>
			<div class="parameter">
				<h3 class="title">Type</h3>
				<CheckboxSimple class="checkbox" name="mechanical" v-model="isMechanical" />
				<CheckboxSimple class="checkbox" name="quartz" v-model="isQuartz" />
			</div>
			<div class="parameter">
				<h3 class="title">Brands</h3>
				<CheckboxSimple class="checkbox" name="Casio" v-model="isCasio" />
				<CheckboxSimple class="checkbox" name="Rolex" v-model="isRolex" />
				<CheckboxSimple class="checkbox" name="Ceiko" v-model="isSeiko" />
				<CheckboxSimple class="checkbox" name="Vostok" v-model="isVostok" />
				<CheckboxSimple class="checkbox" name="Omega" v-model="isOmega" />
			</div>
			<div class="parameter">
				<CheckbixSwitch class="checkbox" name="Water resistance" v-model="isWaterResist" />
				<CheckbixSwitch class="checkbox" name="High rating" v-model="isHighRating" />
				<CheckbixSwitch class="checkbox" name="Discounts" v-model="isDiscounts" />
			</div>
		</div>
		<button @click="$emit('update-aside')" class="close-aside">Close</button>
	</div>
</template>

<script setup lang='ts'>
import CheckbixSwitch from './elements/CheckboxSwitch.vue';
import CheckboxSimple from './elements/CheckboxSimple.vue';

const isMechanical = ref(false)
const isQuartz = ref(false)

const isCasio = ref(false)
const isRolex = ref(false)
const isSeiko = ref(false)
const isVostok = ref(false)
const isOmega = ref(false)

const isWaterResist = ref(false)
const isHighRating = ref(false)
const isDiscounts = ref(false)

const emit = defineEmits(['update-aside'])

</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

.aside {
	flex: 0 0 260px;
	background-color: #fff;
	border-radius: 15px;
	padding: 5px;
	padding-top: 20px;
	padding-bottom: 20px;
	margin: 20px 0;
	align-self: start;
	position: sticky;
	top: 60px;
	overflow-y: auto;
	position: relative;

	@media (max-width: 992px) {
		position: absolute;
		z-index: 1;
		width: 260px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
		left: -300px;
		transition: all 0.2s ease 0s;
	}
}

.close-aside {
	display: none;

	@media (max-width: 992px) {
		display: block;
		background-color: #c72007;
		height: 40px;
		width: 100%;
		border-radius: 8px;
		color: #fff;
		font-size: 18px;
		transition: all 0.2s ease 0s;
		margin-top: 20px;

		&:hover {
			background-color: #a01906;
		}
	}

	@media (max-width: 767px) {
		margin-bottom: 10px;
	}
}

.aside._active {
	@media (max-width: 992px) {
		left: 10px;
	}
}

.parameter:not(:last-child) {
	margin-bottom: 35px;
}

.title {
	font-size: 24px;
	line-height: 130%;
	margin-bottom: 15px;
}

.input-wrapper {
	display: flex;
	gap: 10px;

	input {
		height: 40px;
		border-radius: 5px;
		width: 120px;
		padding: 5px;
		outline: 1px solid #c1c1c1;

		&:focus {
			outline: 1px solid $primary-color;
		}
	}
}

.checkbox {
	margin-bottom: 10px;
	font-size: 20px;
}
</style>