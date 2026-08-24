<template>
	<div class="aside">
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


</script>

<style scoped lang='scss'>
$primary-color: #6750a4;

.aside {
	flex: 0 0 260px;
	background-color: #fff;
	min-height: 700px;
	border-radius: 15px;
	padding: 5px;
	padding-top: 20px;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.parameter {
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

<template></template>

<script setup lang='ts'></script>

<style scoped lang='scss'></style>