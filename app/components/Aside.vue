<template>
	<div class="aside">
		<Icon
			name="material-symbols:close-rounded"
			class="close-aside"
			@click="$emit('update-aside')" />
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
			<CheckboxSimple class="checkbox" name="Seiko" v-model="isSeiko" />
		</div>
		<div class="parameter">
			<CheckbixSwitch class="checkbox" name="Water resistance" v-model="isWaterResist" />
			<CheckbixSwitch class="checkbox" name="High rating" v-model="isHighRating" />
			<CheckbixSwitch class="checkbox" name="Discounts" v-model="isDiscounts" />
		</div>
	</div>
</template>

<script setup lang='ts'>
import CheckbixSwitch from './elements/CheckboxSwitch.vue';
import CheckboxSimple from './elements/CheckboxSimple.vue';

const isMechanical = ref(false)
const isCasio = ref(false)
const isQuartz = ref(false)
const isRolex = ref(false)
const isSeiko = ref(false)
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
	position: absolute;
	font-size: 25px;
	top: 8px;
	right: 8px;
	cursor: pointer;
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